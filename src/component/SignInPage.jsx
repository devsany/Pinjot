import { useState } from "react";
import MultipleImageUpload from "../utils/MultipleImageUpload";

// ─── Icons (inline SVG, no external dependency) ──────────────────────────────

const Icon = ({ path, size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
);

const ICONS = {
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  at: "M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
  lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4",
  eyeOn:
    "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  eyeOff:
    "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22",
  upload: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12",
  checkCircle: "M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3",
  alertCircle: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 8v4M12 16h.01",
  arrow: "M5 12h14M12 5l7 7-7 7",
  userPlus:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  icon,
  suffix,
}) {
  return (
    <div className="field">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="input-wrap">
        <span className={`input-icon ${value ? "input-icon--active" : ""}`}>
          <Icon path={ICONS[icon]} />
        </span>
        <input
          id={id}
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
          className="input"
          autoComplete="off"
        />
        {suffix && <span className="input-suffix">{suffix}</span>}
      </div>
    </div>
  );
}

function PasswordField({ id, label, value, onChange, suffix }) {
  const [show, setShow] = useState(false);
  return (
    <div className="field">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="input-wrap">
        <span className={`input-icon ${value ? "input-icon--active" : ""}`}>
          <Icon path={ICONS.lock} />
        </span>
        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder={label}
          value={value}
          onChange={onChange}
          className="input"
          autoComplete="off"
        />
        <button
          type="button"
          className="eye-btn"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Hide password" : "Show password"}
        >
          <Icon path={show ? ICONS.eyeOff : ICONS.eyeOn} size={16} />
        </button>
        {suffix && <span className="input-suffix">{suffix}</span>}
      </div>
    </div>
  );
}

function StrengthMeter({ password }) {
  const getScore = (pw) => {
    if (!pw) return 0;
    let s = 0;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s;
  };
  const levels = [
    { label: "", color: "transparent" },
    { label: "Weak", color: "#E24B4A" },
    { label: "Fair", color: "#EF9F27" },
    { label: "Good", color: "#639922" },
    { label: "Strong", color: "#1D9E75" },
  ];
  const score = getScore(password);
  const { label, color } = levels[score];
  if (!password) return null;
  return (
    <div className="strength">
      <div className="strength-track">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="strength-seg"
            style={{ background: i <= score ? color : undefined }}
          />
        ))}
      </div>
      <span className="strength-label" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

function MatchHint({ password, confirm }) {
  if (!confirm) return <div className="hint-spacer" />;
  const ok = password === confirm;
  return (
    <div className={`hint ${ok ? "hint--ok" : "hint--err"}`}>
      <Icon path={ok ? ICONS.checkCircle : ICONS.alertCircle} size={13} />
      {ok ? "Passwords match" : "Passwords do not match"}
    </div>
  );
}

function ImageUpload({ onFile, fileName, fileError }) {
  const [dragging, setDragging] = useState(false);

  const process = (file) => {
    if (!file) return;
    const kb = file.size / 1024;
    if (kb < 20 || kb > 200) {
      onFile(null, `File is ${kb.toFixed(1)} KB — must be 20–200 KB`);
      return;
    }
    onFile(file, null);
  };

  return (
    <div
      className={`dropzone ${dragging ? "dropzone--over" : ""} ${fileError ? "dropzone--error" : ""} ${fileName ? "dropzone--success" : ""}`}
      onClick={() => document.getElementById("imgInput").click()}
      onKeyDown={(e) =>
        e.key === "Enter" && document.getElementById("imgInput").click()
      }
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        process(e.dataTransfer.files[0]);
      }}
      role="button"
      tabIndex={0}
      aria-label="Upload profile photo"
    >
      <input
        id="imgInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => process(e.target.files[0])}
      />
      <span className="dropzone-icon">
        <Icon path={fileName ? ICONS.checkCircle : ICONS.upload} size={24} />
      </span>
      <p className="dropzone-title">
        {fileName ? (
          fileName
        ) : (
          <>
            <strong>Click to upload</strong> or drag & drop
          </>
        )}
      </p>
      <p className="dropzone-sub">
        {fileError ? (
          <span style={{ color: "#E24B4A" }}>{fileError}</span>
        ) : (
          "PNG or JPG · 20 KB – 200 KB"
        )}
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFile = (f, err) => {
    setFile(f);
    setFileError(err);
  };

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!username.trim()) e.username = "Username is required";
    if (!password) e.password = "Password is required";
    if (password !== confirm) e.confirm = "Passwords do not match";
    if (fileError) e.file = fileError;
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card success-state">
        <div className="success-icon">
          <Icon path={ICONS.checkCircle} size={36} color="#1D9E75" />
        </div>
        <h2 className="success-title">Account created!</h2>
        <p className="success-sub">Welcome, {name}. You're all set.</p>
      </div>
    );
  }

  return (
    <>
      <style>{CSS}</style>
      <div className="card">
        {/* Header */}
        <div className="header">
          <div className="avatar-ring">
            <Icon path={ICONS.userPlus} size={22} color="#534AB7" />
          </div>
          <h1 className="title">Create your account</h1>
          <p className="subtitle">Fill in the details below to get started</p>
        </div>

        {/* Fields */}
        <div className="fields">
          <InputField
            id="name"
            label="Full name"
            icon="user"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="field-error">{errors.name}</p>}

          <InputField
            id="username"
            label="Username"
            icon="at"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className="field-error">{errors.username}</p>}

          <PasswordField
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StrengthMeter password={password} />
          {errors.password && <p className="field-error">{errors.password}</p>}

          <PasswordField
            id="confirm"
            label="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <MatchHint password={password} confirm={confirm} />
          {errors.confirm && <p className="field-error">{errors.confirm}</p>}

          <div className="divider">
            <span>Profile photo</span>
          </div>

          <MultipleImageUpload
            onFile={handleFile}
            fileName={file?.name}
            name={name}
            password={password}
            username={username}
            confirm={confirm}
            fileError={fileError}
          />
          {errors.file && <p className="field-error">{errors.file}</p>}
        </div>

        {/* Submit */}
        {/* <button className="submit-btn" onClick={handleSubmit}>
          Create account
          <Icon path={ICONS.arrow} size={16} color="#fff" />
        </button> */}

        <p className="footer-text">
          Already have an account?{" "}
          <a href="#" className="footer-link">
            Sign in
          </a>
        </p>
      </div>
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const CSS = `
  .sr-only {
    position: absolute; width: 1px; height: 1px;
    padding: 0; margin: -1px; overflow: hidden;
    clip: rect(0,0,0,0); white-space: nowrap; border: 0;
  }

  .card {
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 32px rgba(0,0,0,0.08);
    padding: 32px 28px 28px;
    max-width: 420px;
    margin: 32px auto;
    font-family: system-ui, -apple-system, sans-serif;
  }

  /* Header */
  .header { text-align: center; margin-bottom: 28px; }
  .avatar-ring {
    width: 52px; height: 52px; border-radius: 50%;
    background: #EEEDFE;
    display: inline-flex; align-items: center; justify-content: center;
    margin-bottom: 12px;
  }
  .title  { font-size: 22px; font-weight: 600; color: #1a1a2e; margin: 0 0 4px; }
  .subtitle { font-size: 14px; color: #888; margin: 0; }

  /* Field */
  .field { margin-bottom: 14px; }
  .input-wrap { position: relative; display: flex; align-items: center; }
  .input-icon {
    position: absolute; left: 14px;
    color: #bbb; transition: color .15s;
    display: flex; pointer-events: none;
  }
  .input-icon--active { color: #7F77DD; }
  .input {
    width: 100%; padding: 12px 42px;
    border: 1.5px solid #e8e8f0;
    border-radius: 10px; font-size: 14px; color: #1a1a2e;
    outline: none; box-sizing: border-box;
    transition: border-color .15s;
    background: #fafafa;
  }
  .input::placeholder { color: #bbb; }
  .input:focus { border-color: #7F77DD; background: #fff; }
  .eye-btn {
    position: absolute; right: 12px;
    background: none; border: none; cursor: pointer;
    color: #bbb; padding: 4px; display: flex;
  }
  .eye-btn:hover { color: #7F77DD; }
  .input-suffix { position: absolute; right: 38px; font-size: 13px; color: #bbb; }

  /* Strength meter */
  .strength { display: flex; align-items: center; gap: 8px; margin: 6px 0 2px; }
  .strength-track { display: flex; gap: 4px; flex: 1; }
  .strength-seg {
    height: 3px; flex: 1; border-radius: 3px;
    background: #eee; transition: background .25s;
  }
  .strength-label { font-size: 11px; font-weight: 500; min-width: 36px; }

  /* Hint */
  .hint {
    display: flex; align-items: center; gap: 5px;
    font-size: 12px; margin: 4px 0 2px;
  }
  .hint--ok  { color: #1D9E75; }
  .hint--err { color: #E24B4A; }
  .hint-spacer { height: 18px; }

  /* Field error */
  .field-error { font-size: 12px; color: #E24B4A; margin: 2px 0 4px 2px; }

  /* Fields block */
  .fields { margin-bottom: 20px; }

  /* Divider */
  .divider {
    display: flex; align-items: center;
    font-size: 12px; color: #bbb;
    margin: 10px 0 12px;
  }
  .divider::before, .divider::after {
    content: ""; flex: 1; height: 1px; background: #f0f0f5;
  }
  .divider::before { margin-right: 10px; }
  .divider::after  { margin-left: 10px; }

  /* Dropzone */
  .dropzone {
    border: 1.5px dashed #ddddf0;
    border-radius: 10px;
    padding: 18px 12px;
    text-align: center;
    cursor: pointer;
    transition: border-color .15s, background .15s;
    background: #fafafa;
  }
  .dropzone:hover    { border-color: #7F77DD; background: #faf9ff; }
  .dropzone--over    { border-color: #7F77DD; background: #f3f1ff; }
  .dropzone--error   { border-color: #E24B4A; background: #fff8f8; }
  .dropzone--success { border-color: #1D9E75; background: #f5fbf8; }
  .dropzone-icon {
    display: flex; justify-content: center;
    color: #7F77DD; margin-bottom: 8px;
  }
  .dropzone--success .dropzone-icon { color: #1D9E75; }
  .dropzone--error   .dropzone-icon { color: #E24B4A; }
  .dropzone-title { font-size: 13px; color: #444; margin: 0 0 4px; }
  .dropzone-sub   { font-size: 12px; color: #aaa; margin: 0; }

  /* Submit */
  .submit-btn {
    width: 100%; padding: 13px;
    background: linear-gradient(135deg, #7F77DD, #534AB7);
    border: none; border-radius: 10px;
    color: #fff; font-size: 15px; font-weight: 600;
    cursor: pointer; display: flex; align-items: center;
    justify-content: center; gap: 8px;
    transition: opacity .2s, transform .1s;
  }
  .submit-btn:hover  { opacity: .9; }
  .submit-btn:active { transform: scale(.99); }

  /* Footer */
  .footer-text {
    text-align: center; font-size: 13px;
    color: #aaa; margin: 14px 0 0;
  }
  .footer-link { color: #7F77DD; text-decoration: none; font-weight: 500; }
  .footer-link:hover { text-decoration: underline; }

  /* Success state */
  .success-state { text-align: center; padding: 48px 28px; }
  .success-icon  { margin-bottom: 16px; }
  .success-title { font-size: 22px; font-weight: 600; color: #1a1a2e; margin: 0 0 8px; }
  .success-sub   { font-size: 14px; color: #888; margin: 0; }
`;

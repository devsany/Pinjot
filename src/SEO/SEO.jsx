import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({name,content}) => {
  return (
    <Helmet>
      <title>{name}</title>
      <meta name='description' content={content} />
    </Helmet>
  );
};

export default SEO;

import React from 'react';

const DOMAIN = process.env.DOMAIN;

const Template = (props) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>CDN test</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
};

const assetFile = `https://${DOMAIN}/assets/images/cdn_test.png`;

const Page = () => {
  return (
    <Template>
      <article>
        <img src={assetFile} />
      </article>
    </Template>
  );
};

export default Page;

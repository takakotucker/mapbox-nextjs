import React from 'react';
import { CUSTOM_ENV } from '../../../config/config';

const MetaData: React.FunctionComponent = () => (
  <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css' rel='stylesheet' />
    {CUSTOM_ENV === 'staging' && <meta name="robots" content="noindex, nofollow" />}
  </>
);
export default MetaData;

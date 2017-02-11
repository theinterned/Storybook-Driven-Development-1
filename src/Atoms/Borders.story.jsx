import React from 'react';
import { storiesOf } from '@kadira/storybook';
import borders from './Borders.css';

const Box = ({className}) => (
  <div className={borders[className]} style={{
      "text-align": "center",
      padding: "2rem",
      "margin-bottom": "2rem"
  }}>{className}</div>);

export default function BordersStory() {
  storiesOf('Borders', module)
    .add('border styles', () => (
      <div>
        <Box className="light" />
        <Box className="normal" />
        <Box className="heavy" />
      </div>
    ));
}

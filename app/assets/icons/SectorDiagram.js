import React from 'react';
import { Path, Text } from 'react-native-svg';

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  const d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(' ');

  return d;
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

export function SectorDiagram({
  corX,
  corY,
  radiusCircle,
  angleStart,
  angleEnd,
  color,
  text,
}) {
  let textCuted = text.substr(0, 10);
  textCuted = textCuted.split('');
  if (text.length > 10) textCuted.push('…');
  return (
    <>
      {textCuted.map((alpha, index) => (
        <Text
          key={index}
          textAnchor="middle"
          transform={`translate(${
            Math.round(
              150 * Math.sin(toRadians(angleStart - 170 + index * 3)),
            ) + corX
          },
                                          ${
                                            Math.round(
                                              150 *
                                                Math.cos(
                                                  toRadians(
                                                    angleStart -
                                                      170 +
                                                      index * 3,
                                                  ),
                                                ),
                                            ) + corY
                                          })
                                rotate(${360 - angleStart - index * 3 + 170})`}
          style={{ fill: '#5e6a7d' }}>
          {alpha}
        </Text>
      ))}
      <Path
        fillOpacity="0.7"
        fill={color}
        strokeLinecap="round"
        d={`${describeArc(
          corX,
          corY,
          radiusCircle,
          angleStart,
          angleEnd,
        )} L ${corX} ${corY}`}
      />
    </>
  );
}

import { css, cx } from '@emotion/css';
import Stack from './Components/Stack';
import Video from './Components/Video';
import Visible from './Components/Visible';
import { CSSProperties, ElementType, ReactNode } from 'react';
import ViteSVGs from './Components/ViteSVGs';

const Center = ({
  children,
  style,
}: {
  children: ReactNode;
  style: CSSProperties;
}) => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);

export const Components: Record<string, ElementType> = {
  Center,
  CenteredText: ({
    children,
    style,
  }: {
    children: ReactNode;
    style?: CSSProperties;
  }) => (
    <Center
      style={
        { textAlign: 'center', textWrap: 'balance', ...style } as CSSProperties
      }
    >
      {children}
    </Center>
  ),
  Highlight: (props) => <span className={highlightStyle} {...props} />,
  Logo: () => (
    <img
      src="/NakazawaTech.png"
      style={{
        border: '4px solid #fff',
        height: 100,
        position: 'absolute',
        right: 48,
        top: 48,
        width: 100,
      }}
    />
  ),
  Lowercase: ({ children, nowrap }) => (
    <span className={cx(lowercaseStyle, nowrap && nowrapStyle)}>
      {children}
    </span>
  ),
  Stack,
  TitleBox: (props) => <div className={titleBoxStyle} {...props} />,
  Video,
  Visible,
  ...ViteSVGs,
};

const lowercaseStyle = css`
  text-transform: lowercase;
`;

const nowrapStyle = css`
  white-space: nowrap;
`;

const titleBoxStyle = css`
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: rgb(0, 0, 0, 0.3) 0px 0px 5px;
  width: fit-content;
`;

const highlightStyle = css`
  color: #5e9fff;
`;

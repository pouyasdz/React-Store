export default interface children {
    children:
      | string
      | number
      | boolean
      | React.ReactElement<React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  }
  
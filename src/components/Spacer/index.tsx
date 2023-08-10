import React from "react"

interface SpacerProps {
  height: string
  width: string
}

const Spacer = (props: SpacerProps) => {
  const styles = {
    height: props.height,
    width: props.width,
  }
  return <div style={styles} />
}

export default Spacer

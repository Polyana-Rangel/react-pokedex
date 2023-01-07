import React from 'react'
import { ProgressBarContainer, ProgressLine } from './styles'
  
export const ProgressBar = ({ backgroundColor, progress }) => {             
    return (
      <ProgressBarContainer>
        <ProgressLine backgroundColor={backgroundColor} progress={progress} />
      </ProgressBarContainer>
    )
}

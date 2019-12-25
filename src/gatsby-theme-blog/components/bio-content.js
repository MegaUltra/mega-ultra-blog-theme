import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Known for the throwback grindhouse exploitation feature length film <em>Left for Dead</em>,{` `}
    <strong>
    <Styled.a href="/">Mega Ultra Studios</Styled.a>
    </strong> {` `}
    creates unique original short films, music videos, and promotional videos for independent artists and small business.
  </Fragment>
)

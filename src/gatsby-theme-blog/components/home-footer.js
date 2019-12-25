/** @jsx jsx */
import { jsx } from "theme-ui"
import Footer from "gatsby-theme-blog/src/components/home-footer"

export default props => (
<div sx={{ backgroundColor: "text", color: "primary", }}>
    <Footer {...props} />
</div>

)
import glamorous from "glamorous"
import style from "../util/style"

export default glamorous.div({
  minHeight: 200,
  display: "flex",
  marginBottom: 50,
  [style.breakpoint.project]: {
    flexDirection: "column",
  },
  [style.breakpoint.small]: {
    flexDirection: "row",
  },
  [style.breakpoint.projectSmall]: {
    flexDirection: "column",
  },
})

const ImageContainer = glamorous.div({
  height: 200,
  width: 300,
  background: style.color.geyser,
  flexShrink: 0,
  [style.breakpoint.project]: {
    marginBottom: 35,
  },
  [style.breakpoint.projectImage]: {
    width: 200,
    height: 133.33,
  },
})

const Image = glamorous.img({})

export const ProjectImage = ({ src }) => (
  <ImageContainer>
    <Image src={src} />
  </ImageContainer>
)

export const ProjectInfo = glamorous.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: 20,
  [style.breakpoint.project]: {
    marginLeft: 0,
  },
})

export const ProjectName = glamorous.h2({
  marginTop: 0,
  color: style.color.stormGray,
})

export const ProjectBody = glamorous.p({
  color: style.color.stormGray,
  wordWrap: "break-word",
})

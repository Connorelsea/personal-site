import Link from "next/link"
import PageContainer, { Left, Right } from "../components/page-container"
import BlanketAnimation from "../components/blanket-animation"
import PageHeader from "../components/page-header"
import Navigation from "../components/navigation"
import GithubIcon from "../components/icons/github"
import GmailIcon from "../components/icons/gmail"
import Project, {
  ProjectImage,
  ProjectInfo,
  ProjectName,
  ProjectBody,
} from "../components/project"
import glamorous from "glamorous"
import { css } from "glamor"
import style from "../util/style"

export default () => (
  <PageContainer>
    <Left>
      <div>
        <BlanketAnimation>
          <PageHeader>Cody Wall</PageHeader>

          <Blurb>
            <p>Hey! I'm a senior Computer Science student at LSU.</p>
            <p>
              My focus is in Software Engineering but I mainly like to work in
              frontend web development.
            </p>
          </Blurb>

          <Icons>
            <BlanketAnimation
              animation={css.keyframes("fadeIn", {
                from: { opacity: 0, transform: "translateX(-20px)" },
                to: { opacity: 1, transform: "translateX(0)" },
              })}
            >
              <IconLink href="https://github.com/cmwall" target="_blank">
                <GithubIcon fill={style.color.stormGray} />
              </IconLink>

              <IconLink href="mailto:cody@cmwall.io">
                <GmailIcon fill={style.color.stormGray} />
              </IconLink>
            </BlanketAnimation>
          </Icons>
        </BlanketAnimation>
      </div>

      <Navigation />
    </Left>

    <Right>
      <BlanketAnimation>
        <Project>
          <BlanketAnimation>
            <ProjectImage src="/static/supreme-database.png" />
            <ProjectInfo>
              <ProjectName>Supreme Database</ProjectName>
              <ProjectBody>
                A website built to save information and pictures about Supreme's
                clothing line throughout the seasons. Periodically scrapes the
                online store in Ruby and saves information and pictures. The
                information is served via a Ruby on Rails API using JSON API
                Spec compliant responses to a separate React SPA.
              </ProjectBody>
            </ProjectInfo>
          </BlanketAnimation>
        </Project>

        <Project>
          <BlanketAnimation>
            <ProjectImage src="/static/lsu-courses.png" />
            <ProjectInfo>
              <ProjectName>LSU Courses</ProjectName>
              <ProjectBody>
                A modern course offerings website for LSU. Periodically scrapes
                the current course offerings website using Node.js and saves the
                formerly style-less text to a relational PostreSQL database. The
                separate, React SPA, displays the information in a beautiful,
                easy-to-read manner.
              </ProjectBody>
            </ProjectInfo>
          </BlanketAnimation>
        </Project>
      </BlanketAnimation>
    </Right>
  </PageContainer>
)

const Blurb = glamorous.div({
  color: style.color.stormGray,
  marginBottom: 35,
})

const Icons = glamorous.div({
  display: "flex",
  marginBottom: 70,
})

const IconLink = glamorous.a({
  marginRight: 35,
  "> *": {
    transition: "all .2s",
    "&:hover": {
      fill: style.color.geyser,
      cursor: "pointer",
    },
  },
})

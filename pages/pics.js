import PageContainer, { Left } from "../components/page-container"
import PageHeader from "../components/page-header"
import BlanketAnimation from "../components/blanket-animation"
import Navigation from "../components/navigation"

export default () => (
  <PageContainer>
    <Left>
      <BlanketAnimation>
        <PageHeader>Cody Wall</PageHeader>
        <Navigation />
      </BlanketAnimation>
    </Left>
  </PageContainer>
)

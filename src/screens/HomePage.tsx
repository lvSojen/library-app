import { Carousels } from "../components/common/Carousels"
import { ExploreTopBooks } from "../components/common/ExploreTopBooks"

export const HomePage: React.FC<{}> = () => {
  return (
    <div>
      <ExploreTopBooks />
      <Carousels />
    </div>
  )
}

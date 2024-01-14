import SectionBase from "./SectionBase";
import SectionContent from "./SectionContent";
import SectionHeader from "./SectionHeader";

const Section = Object.assign(SectionBase, {
    Header: SectionHeader,
    Content: SectionContent
})

export { Section }

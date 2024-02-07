import type { Config } from 'tailwindcss'

const config: Pick<Config, "content"> = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
}
export default config
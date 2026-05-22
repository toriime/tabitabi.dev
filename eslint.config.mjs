import nextCoreWebVitals from "eslint-config-next/core-web-vitals"

// Reuse the react-hooks plugin instance that eslint-config-next registers, so
// the rule overrides below resolve to the same plugin namespace under flat config.
const reactHooksPlugin = nextCoreWebVitals.find(
  (c) => c.plugins && c.plugins["react-hooks"],
)?.plugins["react-hooks"]

const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "src/payload-types.ts",
      "src/migrations/**",
    ],
  },
  ...nextCoreWebVitals,
  {
    plugins: { "react-hooks": reactHooksPlugin },
    rules: {
      // Newly-enforced by eslint-plugin-react-hooks@7 (bundled with
      // eslint-config-next 16). Demoted to warnings to keep the dependency
      // upgrade isolated from app-code changes — pre-existing patterns flagged
      // here should be addressed as a separate follow-up (see upgrade notes).
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
    },
  },
]

export default config

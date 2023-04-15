import { supportedFunctions } from "@/app/assets/data/supportedFunctions"

const RPackage = () => {
  return (
    <>
      {supportedFunctions.map((e) => {
        return (
          <div className="py-3">
            <h5>
              <strong>{e.package}</strong>
            </h5>
            <div className="flex flex-row flex-wrap ">
              {e.functions.map((f) => {
                return (
                  <div className="me-4 w-60">
                    <code>{f}</code>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default RPackage

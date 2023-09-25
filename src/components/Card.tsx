import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

function Card({ skillConfig, title }: any) {
  return (
    <div className="p-5 bg-content rounded-lg flex">
      <div>
        <h2 className="text-bgc text-lg font-bold text-center">{title}</h2>
        <div className="p-5 bg-content rounded-lg flex">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {skillConfig.map(
              (config: {
                id: Key | null | undefined;
                image: string | undefined;
                name:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
              }) => (
                <div key={config.id} className="flex flex-col items-center">
                  <img
                    src={config.image}
                    alt=""
                    className="w-16 h-16 rounded-lg"
                  />
                  <div className="text-bgc text-base font-medium text-center mt-2">
                    {config.name}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

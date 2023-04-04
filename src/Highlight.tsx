import { escapeRegExp } from "lodash";

export type HighLightPropsType = {
  text?: string;
  patterns?: string[];
  highLightClassName?: string;
};

const HighLightWords = ({
  text = "",
  patterns = [],
  highLightClassName,
}: HighLightPropsType) => {
  if (!patterns.filter((item) => item)?.length) return <>{text}</>;

  const regex = new RegExp(
    patterns
      .filter((pattern) => pattern)
      .map((pattern) => `(${escapeRegExp(pattern)})`)
      .join("|"),
    "gi"
  );
  const parts = text.split(regex);

  return (
    <>
      {parts
        .filter((part) => part)
        .map((part) =>
          regex.test(part) ? (
            <span className={highLightClassName} key={part}>
              {part}
            </span>
          ) : (
            part
          )
        )}
    </>
  );
};

export default HighLightWords;

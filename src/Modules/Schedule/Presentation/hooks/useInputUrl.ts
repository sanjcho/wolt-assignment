import _ from "lodash";
import { useCallback, useState } from "react";

type fetchFn = (url: string) => Promise<void>;
export const useInputUrl = (fetchNewSchedule: fetchFn) => {
  const [input, setInput] = useState("");

  const [isInputValid, setIsInputValid] = useState(true);
  const onSubmitPress = useCallback(async () => {
    if (URL_PATTERN.test(input)) {
      setIsInputValid(true);
      fetchNewSchedule(input);
    } else {
      setIsInputValid(false);
    }
  }, [setIsInputValid, fetchNewSchedule, input]);

  return {
    isInputValid,
    onChangeText: setInput,
    onSubmitPress,
  };
};

const URL_PATTERN = new RegExp(
  "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
); // fragment locator

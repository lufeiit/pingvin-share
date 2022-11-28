import Config from "../types/config.type";
import api from "./api.service";

const getAll = async (): Promise<Config[]> => {
  return (await api.get("/configs")).data;
};

const get = (key: string, configVariables: Config[]): any => {
  const configVariable = configVariables.filter(
    (variable) => variable.key == key
  )[0];

  if (!configVariable) throw new Error(`Config variable ${key} not found`);

  if (configVariable.type == "number") return parseInt(configVariable.value);
  if (configVariable.type == "boolean") return configVariable.value == "true";
  if (configVariable.type == "string") return configVariable.value;
};

export default {
  getAll,
  get,
};

import { compile, pathToRegexp } from 'path-to-regexp';

const compileOptions = (options: any) =>
  Object.keys(options)
    .map((key) => `${key}=${options[key]}`)
    .join('&');

export const compileHash = (route: any) => {
  const { path, keys, options } = route;

  const toPath = compile(path);
  const query = compileOptions(options);
  return `#/${toPath(keys)}${query === '' ? '' : `?${query}`}`;
};

const parseRouteKeys = (pathString: any, result: any) => {
  const { keys, regexp } = result;
  const regexpResult = regexp.exec(pathString);

  return keys.reduce(
    (obj: any, key: any, i: any) => ({
      ...obj,
      [key.name]: i + 1 < regexpResult.length ? regexpResult[i + 1] : '',
    }),
    {}
  );
};

const parseRouteOptions = (optionsString: any) =>
  optionsString
    .split('&')
    .map((str: string) => str.split('='))
    .filter((keyValuePair: any) => keyValuePair.length === 2)
    .reduce(
      (obj: any, keyValuePair: any) => ({
        ...obj,
        [keyValuePair[0]]: keyValuePair[1],
      }),
      {}
    );

export const parseRoute = (hash: string, paths: any) => {
  const hashParts = hash.split('?');
  const pathString = hashParts[0];
  const optionsString = hashParts.length > 1 ? hashParts[1] : '';

  const result = paths
    .map((path: any) => {
      const keys: any = [];
      const regexp = pathToRegexp(path, keys);

      return { path, regexp, keys };
    })
    .find((path: any) => path.regexp.test(pathString));

  const path = result ? result.path : pathString;
  const keys = result ? parseRouteKeys(pathString, result) : {};
  const options = parseRouteOptions(optionsString);

  return { path, keys, options };
};

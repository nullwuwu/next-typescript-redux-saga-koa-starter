/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}
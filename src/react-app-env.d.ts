/// <reference types="react-scripts" />

declare module '@antv/data-set' {
  const DataSet: any;

  type Node<T extends { name: string; children: Array<T> }> = {
    parent?: Node<T>;
    data: T;
    children: Array<Node<T>>;
    width: number;
    x: number;
    y: number;
    depth: number;
    height: number;
    hgap: number;
    id: string;
  };

  class DataView<T extends { name: string; children: Array<T> }> {
    /**
     * 载入数据
     *
     * 类型很不完善，自求多福吧。
     *
     * @param data 原始数据，可能是字符串，也可能是数组、对象，或者另一个数据视图实例
     * @param options 指定了载入数据使用的 connector 和载入时使用的配置项。
     */
    source(data?: T, options?: object): this;

    /**
     *
     * 类型很不完善，自求多福吧。
     *
     * @param options 指定了处理数据使用的 transform 和数据处理的配置项。
     */
    transform(options: object): this;

    getAllLinks(): Array<{
      source: Node<T>;
      target: Node<T>;
    }>;

    getAllNodes(): Array<Node<T>>;
  }
  export { DataView as View, DataSet as default };
}

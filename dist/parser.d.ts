import { Video, MockWebWorker, ParserConfigOptions } from './types';
/**
 * SVGA 下载解析器
 */
export declare class Parser {
    worker: MockWebWorker | Worker;
    private readonly isDisableImageBitmapShim;
    private readonly onDownloadProgress?;
    constructor(options?: ParserConfigOptions);
    /**
     * 通过 url 下载并解析 SVGA 文件
     * @param url SVGA 文件的下载链接
     * @returns Promise<SVGA 数据源>
     */
    load(url: string): Promise<Video>;
    /**
     * 销毁实例
     */
    destroy(): void;
}

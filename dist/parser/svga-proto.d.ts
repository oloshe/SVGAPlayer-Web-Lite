declare const _default: {
    nested: {
        com: {
            nested: {
                opensource: {
                    nested: {
                        svga: {
                            options: {
                                objc_class_prefix: string;
                                java_package: string;
                            };
                            nested: {
                                MovieParams: {
                                    fields: {
                                        viewBoxWidth: {
                                            type: string;
                                            id: number;
                                        };
                                        viewBoxHeight: {
                                            type: string;
                                            id: number;
                                        };
                                        fps: {
                                            type: string;
                                            id: number;
                                        };
                                        frames: {
                                            type: string;
                                            id: number;
                                        };
                                    };
                                };
                                SpriteEntity: {
                                    fields: {
                                        imageKey: {
                                            type: string;
                                            id: number;
                                        };
                                        frames: {
                                            rule: string;
                                            type: string;
                                            id: number;
                                        };
                                    };
                                };
                                Layout: {
                                    fields: {
                                        x: {
                                            type: string;
                                            id: number;
                                        };
                                        y: {
                                            type: string;
                                            id: number;
                                        };
                                        width: {
                                            type: string;
                                            id: number;
                                        };
                                        height: {
                                            type: string;
                                            id: number;
                                        };
                                    };
                                };
                                Transform: {
                                    fields: {
                                        a: {
                                            type: string;
                                            id: number;
                                        };
                                        b: {
                                            type: string;
                                            id: number;
                                        };
                                        c: {
                                            type: string;
                                            id: number;
                                        };
                                        d: {
                                            type: string;
                                            id: number;
                                        };
                                        tx: {
                                            type: string;
                                            id: number;
                                        };
                                        ty: {
                                            type: string;
                                            id: number;
                                        };
                                    };
                                };
                                ShapeEntity: {
                                    oneofs: {
                                        args: {
                                            oneof: string[];
                                        };
                                    };
                                    fields: {
                                        type: {
                                            type: string;
                                            id: number;
                                        };
                                        shape: {
                                            type: string;
                                            id: number;
                                        };
                                        rect: {
                                            type: string;
                                            id: number;
                                        };
                                        ellipse: {
                                            type: string;
                                            id: number;
                                        };
                                        styles: {
                                            type: string;
                                            id: number;
                                        };
                                        transform: {
                                            type: string;
                                            id: number;
                                        };
                                    };
                                    nested: {
                                        ShapeType: {
                                            values: {
                                                SHAPE: number;
                                                RECT: number;
                                                ELLIPSE: number;
                                                KEEP: number;
                                            };
                                        };
                                        ShapeArgs: {
                                            fields: {
                                                d: {
                                                    type: string;
                                                    id: number;
                                                };
                                            };
                                        };
                                        RectArgs: {
                                            fields: {
                                                x: {
                                                    type: string;
                                                    id: number;
                                                };
                                                y: {
                                                    type: string;
                                                    id: number;
                                                };
                                                width: {
                                                    type: string;
                                                    id: number;
                                                };
                                                height: {
                                                    type: string;
                                                    id: number;
                                                };
                                                cornerRadius: {
                                                    type: string;
                                                    id: number;
                                                };
                                            };
                                        };
                                        EllipseArgs: {
                                            fields: {
                                                x: {
                                                    type: string;
                                                    id: number;
                                                };
                                                y: {
                                                    type: string;
                                                    id: number;
                                                };
                                                radiusX: {
                                                    type: string;
                                                    id: number;
                                                };
                                                radiusY: {
                                                    type: string;
                                                    id: number;
                                                };
                                            };
                                        };
                                        ShapeStyle: {
                                            fields: {
                                                fill: {
                                                    type: string;
                                                    id: number;
                                                };
                                                stroke: {
                                                    type: string;
                                                    id: number;
                                                };
                                                strokeWidth: {
                                                    type: string;
                                                    id: number;
                                                };
                                                lineCap: {
                                                    type: string;
                                                    id: number;
                                                };
                                                lineJoin: {
                                                    type: string;
                                                    id: number;
                                                };
                                                miterLimit: {
                                                    type: string;
                                                    id: number;
                                                };
                                                lineDashI: {
                                                    type: string;
                                                    id: number;
                                                };
                                                lineDashII: {
                                                    type: string;
                                                    id: number;
                                                };
                                                lineDashIII: {
                                                    type: string;
                                                    id: number;
                                                };
                                            };
                                            nested: {
                                                RGBAColor: {
                                                    fields: {
                                                        r: {
                                                            type: string;
                                                            id: number;
                                                        };
                                                        g: {
                                                            type: string;
                                                            id: number;
                                                        };
                                                        b: {
                                                            type: string;
                                                            id: number;
                                                        };
                                                        a: {
                                                            type: string;
                                                            id: number;
                                                        };
                                                    };
                                                };
                                                LineCap: {
                                                    values: {
                                                        LineCap_BUTT: number;
                                                        LineCap_ROUND: number;
                                                        LineCap_SQUARE: number;
                                                    };
                                                };
                                                LineJoin: {
                                                    values: {
                                                        LineJoin_MITER: number;
                                                        LineJoin_ROUND: number;
                                                        LineJoin_BEVEL: number;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                FrameEntity: {
                                    fields: {
                                        alpha: {
                                            type: string;
                                            id: number;
                                        };
                                        layout: {
                                            type: string;
                                            id: number;
                                        };
                                        transform: {
                                            type: string;
                                            id: number;
                                        };
                                        clipPath: {
                                            type: string;
                                            id: number;
                                        };
                                        shapes: {
                                            rule: string;
                                            type: string;
                                            id: number;
                                        };
                                    };
                                };
                                MovieEntity: {
                                    fields: {
                                        version: {
                                            type: string;
                                            id: number;
                                        };
                                        params: {
                                            type: string;
                                            id: number;
                                        };
                                        images: {
                                            keyType: string;
                                            type: string;
                                            id: number;
                                        };
                                        sprites: {
                                            rule: string;
                                            type: string;
                                            id: number;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export default _default;

import React, { forwardRef, useEffect, useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';

// Paper dimansion
// A4 210x301.50mm
// A5 148x213.80mm
// Thermal 80xAuto mm

// fake data

const testArr = {
    header: {

    },
    body: [
        {
            id: 1,
            dsp: "shampoo",
        },
        {
            id: 2,
            dsp: "soap"
        },
        {
            id: 3,
            dsp: "lotion"
        }
    ],
    footer: {

    }
}

// Style for paper component 
const getPaperStyle = (size) => {
    const paperSize = {
        "normal": {
            w: "148mm",
            h: "213.80mm",
            paddingPaper: "20px",
            fontSizeHeader: "18pt"
        },
        "thermal": {
            w: "80mm",
            h: "auto",
            paddingPaper: "20px",
            fontSizeHeader: "9pt"
        }
    }

    return paperSize[size]
}

// Button trigger print
export default function DotPrint() {
    const componentRef = useRef();

    return <div>
        <ReactToPrint
            trigger={() => <button>Print this out!</button>}
            content={() => componentRef.current}
        />
        <div
            style={{
                // display: 'none',
            }}
        >
            <ComponentToPrint
                ref={componentRef}
                paperSize={"normal"}
                data={testArr}
            />
        </div>
    </div>;
}

// Paper component for print
const ComponentToPrint = forwardRef((props, ref) => {

    const [paperStyle, setPaperStyle] = useState(null)

    useEffect(() => {
        setPaperStyle(getPaperStyle(props.paperSize))
    }, [props.paperSize])

    return (
        <div
            ref={ref}
        >
            {
                props.paperSize !== "thermal" ?
                    <NormalSize paperStyle={paperStyle} data={props.data} /> :
                    <ThermalSize paperStyle={paperStyle} data={props.data} />
            }
        </div>
    )
});

// Paper thermal
const ThermalSize = ({ paperStyle, data }) => {
    return (
        <div
            style={{
                width: paperStyle?.w,
                height: paperStyle?.h,
                padding: paperStyle?.paddingPaper,
                background: "grey"
            }}
        >
            <span>Test</span>
        </div>
    )
}

// Paper A4, A5
const NormalSize = ({ paperStyle, data }) => {
    let itemLimit = 2
    let pageCount = Math.round(data.body.length / itemLimit)

    return (
        [...Array(pageCount)].map((el, index) => {
            return <div
                key={index}
                style={{
                    width: paperStyle?.w,
                    height: paperStyle?.h,
                    padding: paperStyle?.paddingPaper,
                    background: "#f3f3f3"
                }}
            >
                {/* Header page for first page */}
                {
                    (() => {
                        if (index === 0) {
                            return <NormalHeader paperStyle={paperStyle} data={data.header} />
                        }
                    })()
                }

                {/* Splice body page by itemLimit */}
                <NormalBody paperStyle={paperStyle} data={data.body} itemLimit={itemLimit} page={index} />

                {/* Footer page for last page */}
                {
                    (() => {
                        if (index === pageCount - 1) {
                            return <NormalFooter paperStyle={paperStyle} data={data.footer} />
                        }
                    })()
                }
            </div>
        })
    )
}

const NormalHeader = ({ paperStyle }) => {
    return (
        <div>
            <span>Header</span>
        </div>
    )
}

const NormalBody = ({ paperStyle, data, itemLimit, page }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>no</th>
                    <th>id</th>
                    <th>dsp</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((load, index) => {
                        if (index >= itemLimit * page && index < itemLimit * (page + 1)) {
                            return (
                                <tr
                                    key={index}
                                >
                                    <td>{index + 1}</td>
                                    <td>{load.id}</td>
                                    <td>{load.dsp}</td>
                                </tr>
                            )
                        }
                        return null;
                    })
                }
            </tbody>
        </table>
    )
}

const NormalFooter = ({ paperStyle }) => {
    return (
        <div>
            <span>Footer</span>
        </div>
    )
}



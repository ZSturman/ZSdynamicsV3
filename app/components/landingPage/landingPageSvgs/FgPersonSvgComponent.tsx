import React from "react";

const FgPersonSvgComponent = ({ className }: { className?: string }) => {

  const colors = {
      backpack: {
        main: "#2d3a42",
        straps: "#2b3034",
        pocketStraps: "#636a70",
        buckles: "#2b2d2f",
        pocketFlaps: "#364850",
        pocket: "#172024",
        accents: "#654c74",
      },
  
      person: {
        skin: "#F2D6B6",
        hair: "#3d2d1d",
        shirt: "#4C4C4C",
        sleeve: "#474444",
        pants: "#667780",
      }

    }



  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="265"
      height="386"
      fill="none"
      viewBox="0 0 265 386"
    >
      <g id="head">
        <path
          id="face"
          fill={colors.person.skin}
          d="m107 43 38 4 11 67-32 6-2-6-5-3-5-5-2-7-3-6-1-12 2-11-2-8 1-19Z"
        />
        <path
          id="neckAndEar"
          fill={colors.person.skin}
          d="m109 58 2 4 3 4v5l-2 3 1 5v3l-5 1-2-1-1-1-1-3v-3l1-2-1-5-2-4 1-7 3-1 3 2Zm10 16 47-14-3 30v12l8 12-50 3 2-15-4-8V74Z"
        />

        <path
          id="hair"
          fill={colors.person.hair}
          d="m121 2 9-2 9 2 3 2 4 2 4 3 4-1 4 1 7 1 5 5v2l3 1 4 1 2 3v3l2 2v3l3 3v5l-2 2-1 5-5 8-3 5-1 8-1 5-2 10-2-2v5l-3-1v8l-4-2-1 2v4l-8-7-6 3-3-2h-6l-8-1-4 1-1-3-3 3-1-4-2-2v-5h-3l1-9-4-2v-4l-4 1 2-4-2-2-3-2-4 4-1-3-3 3-6-6-3 2 2-5-5-2 3-4-2-3 6-7-3-2 8-5 2-7 4-4 7-6 3-3 9-6Z"
        />
      </g>

      <g id="pants">
        <path
          id="shin"
          fill={colors.person.pants}
          d="m5 311 47 6 3 36 5 21H6v-13l-2-16-1-13v-10l2-11Z"
        />
        <path
          id="thy"
          fill={colors.person.pants}
          d="m95 298 140 21c11 1 18 11 17 21l-1 19v5c3 8-1 16-9 18l-9 2h-7l-20-3h-4l-24 1h-4l-11 3h-7l-14-1-35-4-23-1-7-2-21-8-3-2-4-3-5-2-3-1c-3-1-6-2-8-5l-10-10-15-18c-5-6-5-14-2-20l3-4 6-5c3-3 7-5 11-6l19-2h6l44 7Z"
        />
      </g>

      <g id="torso">
        <path
          id="forearm"
          fill={colors.person.skin}
          d="M67 288c-3-7 1-15 9-16l16-4 5 2c1 2 3 3 5 2l11-3 7 1c7 2 9 11 5 17l-2 2-7 4-28 7-8 2c-4 0-8-1-9-5l-4-9Z"
        />

        <path
          id="shirt"
          fill={colors.person.shirt}
          d="M67 153c-2-8 1-17 8-22h1l3-2 19-8 16-7 9-5 8-1h8l16-2h4l13 2h18l7 1 14 5 7 5 7 7 10 12 3 8 5 19 14 85 3 94-1 6-2 10c-2 7-7 12-14 13l-8-1-7-3-8-1-15 1h-4l-18-3h-7l-17 4h-8l-13-1-13-3-4-1-18-6c-4-2-7-5-10-9l-3-7-3-6-2-13v-8l2-10c0-5 3-9 7-12l4-3c3-2 5-5 7-9l3-9c2-4 2-9 1-13l-4-12v-9c0-5-2-9-5-13l-14-17-4-7-15-49Z"
        />

        <path
          id="sleeve"
          fill={colors.person.sleeve}
          d="M58 149c2-5 5-10 10-13l1-1c5-3 11-4 17-3 5 2 9 5 12 9l5 10c3 4 4 8 4 13v13l-1 7-7 24-1 5-1 15v6l1 4v2l-1 2 1 4 2 1v3h-1v3l1 2v4l1 2 1 3v5c2 1 1 4-1 4l-2 1-8 1c-2 0-5 1-7 3-1 2-4 3-6 3l-6 1-2 1-2 1h-5l-1-3v-1l-1-2-1-3v-4l-1-1v-7c1-1 0-2-1-3v-1c-2 0-2-2-2-3l2-5c1-1 0-2-1-3v-2l-1-2-1-1c-2-1-3-3-2-4l1-2v-3l-1-64 1-8 4-13Z"
        />
      </g>

      <g id="backpack">
        <path
          fill={colors.backpack.straps}
          id="backpackStraps"
          d="M102 233h3l9 14 14 15 4 3 5 3c5 2 6 7 4 11-2 5-8 6-13 3l-7-6-3-4-11-17-3-7-2-6v-9Zm0-110-3-1-1-1v-2l1-2 7-3 3-1 2-1c5-1 11 0 15 2l7 2 5 3 20 14 2 2 9 10c7 8 0 19-10 16l-4-2-17-17-16-12-6-4-6-2-5-1h-3Zm84-12c-1-2 1-5 3-6h2l5 1c3 0 5 1 7 3s4 6 3 9v9l1 14 1 4c4 5 1 13-6 13h-2c-5 0-9-3-10-8v-20l-4-19Z"
        />

        <path
          fill={colors.backpack.pocketFlaps}
          id="packpackTopFlapBack"
          d="m152 146 15 2 10 29-38 15-4-5v-9l2-18 6-9 9-5Z"
        />
        <path
          id="backpackBody"
          fill={colors.backpack.main}
          d="m162 156 7-1 32 3c13 1 24 9 31 20l9 15 5 13 2 6 4 15 3 22 1 8 4 8c2 4 4 8 4 12l1 17-1 16c0 5-1 9-3 13l-1 1c-3 9-10 17-19 21l-10 3-17 3-21 1-17-1-9-1-7-2c-5-1-9-4-12-7-5-4-8-9-10-15l-3-12-1-8-1-18v-7l3-21 2-25-1-22v-8l3-17 2-9 1-3 8-11 4-4c1-2 4-4 7-5Z"
        />
        <path
          id="backpackTopFlap"
          fill={colors.backpack.pocketFlaps}
          d="m179 201-12-44-5-7-6-2-1-3 7 3 60 6 4-2 5 2 14 22 8 24-9 12-48 2-17-13Z"
        />
        <path
          fill={colors.backpack.pocket}
          id="backpackPocket"
          d="M190 321v-27c-1-13 11-23 23-20l25 5c9 2 16 10 16 19v19l-1 7-3 8c-1 4-4 8-9 11l-5 3-7 3-14 2-6-1-10-1-8-4c-3-4-5-9-4-14l3-10Z"
        />
        <path
          id="backpackPocketStrap"
          fill={colors.backpack.accents}
          d="M222 309c-1-2 1-4 3-4 2-1 4 1 5 3l1 9v3l-1 10-1 4v2l-1 1h-4l-1-1v-1l-1-6 1-8v-3l-1-9Z"
        />
        <path
          fill={colors.backpack.pocketFlaps}
          id="backpackPocketFlap"
          d="M190 290c-2-2-3-5-2-8 0-3 2-5 4-6l3-2c3-2 6-2 10-2l14 2 6-1 15-2c9-1 18 6 17 16v8c0 3-2 6-4 8l-6 3-19 1-24 2-6-1c-2-2-3-4-3-7l-1-3c0-3-1-5-3-7l-1-1Z"
        />
        <path
          id="backpackPocketFlapLeftStrap"
          fill={colors.backpack.pocketStraps}
          d="M206 309v-3l-1-2v-8l1-3 1-2 3-2c1 0 2 1 2 3l1 3v1l-1 11v9l1 6-1 3-1 3c0 2-1 3-2 3l-3-2-1-3v-11l1-4v-2Z"
        />
        <path
          id="backpackPocketFlapLeftStrapKnuckle"
          fill={colors.backpack.buckles}
          d="m206 307 1-3h5l1 2v9l-1 2h-5v-1l-1-2v-7Z"
        />
        <path
          id="backpackPocketFlapRightStrap"
          fill={colors.backpack.pocketStraps}
          d="m244 305-1-3v-13l2-2 2-2c2 0 3 1 3 3v33l-1 3c0 2-1 3-3 3l-2-2-1-3-1-3v-2l1-4v-2l1-4v-2Z"
        />
        <path
          id="backpackPocketFlapRightStrapKnuckle"
          fill={colors.backpack.buckles}
          d="m244 303 1-3h4l2 2v9l-2 2h-4l-1-1v-9Z"
        />
        <path
          id="backpackTopFlapLeftStrap"
          fill={colors.backpack.pocketStraps}
          d="M188 188v-2c1-4 6-4 8-2l1 2 1 2 4 9 3 12 3 19c0 2 0 5-2 8l-1 6v6l-1 12v20l-1 2c-1 3-5 3-7 0l-1-2v-31l2-9 1-6v-9l-3-17-4-11-3-9Z"
        />
        <path
          id="backpackTopFlapLeftStrapKnuckle"
          fill={colors.backpack.buckles}
          d="m198 229 3-4h6l2 3v5l-1 3v1c0 2-1 4-3 5l-3-1h-1c-1-1-3-3-3-5v-7Z"
        />
        <path
          id="backpackTopFlapRightStrap"
          fill={colors.backpack.pocketStraps}
          d="m227 190 1-4v-1c2-3 7-4 9-1l1 2 2 8 4 12 7 19 1 3 1 2-1 9-1 5v11l2 7 2 10v2c0 3-5 4-7 1l-1-1-1-2-2-10-2-11-1-8v-15l-1-1-4-16-2-5-4-7-1-4-2-5Z"
        />
        <path
          id="backpackTopFlapRightStrapKnuckle"
          fill={colors.backpack.buckles}
          d="m243 227 1-1 1-1c1-2 3-2 5-2l2 2 1 3v3c1 2 0 4-2 5l-2 2h-4l-2-2v-9Z"
        />
      </g>
    </svg>
  );
};

export default FgPersonSvgComponent;

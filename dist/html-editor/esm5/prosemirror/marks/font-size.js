var ɵ0 = function (dom) {
    var size = dom.getAttribute("data-font-size");
    return size ? { fontSize: size } : false;
};
export var fontSize = {
    excludes: "fontSize",
    group: "fontSize",
    attrs: {
        fontSize: {},
    },
    parseDOM: [
        {
            tag: "span[data-font-size]",
            getAttrs: ɵ0,
        },
    ],
    toDOM: function (mark) {
        return [
            "span",
            { style: "font-size: " + mark.attrs.fontSize, "data-font-size": mark.attrs.fontSize },
            0
        ];
    },
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9udC1zaXplLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2lvbmljLWV4dGVuc2lvbnMvaHRtbC1lZGl0b3IvIiwic291cmNlcyI6WyJwcm9zZW1pcnJvci9tYXJrcy9mb250LXNpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IlNBV3NCLFVBQUEsR0FBRztJQUNULElBQU0sSUFBSSxHQUFJLEdBQWUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM3RCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUMzQyxDQUFDO0FBWmIsTUFBTSxDQUFDLElBQU0sUUFBUSxHQUFhO0lBQzlCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLEtBQUssRUFBRSxVQUFVO0lBQ2pCLEtBQUssRUFBRTtRQUNILFFBQVEsRUFBRSxFQUFFO0tBQ2Y7SUFDRCxRQUFRLEVBQUU7UUFDTjtZQUNJLEdBQUcsRUFBRSxzQkFBc0I7WUFDM0IsUUFBUSxJQUdQO1NBQ0o7S0FDSjtJQUNELEtBQUssWUFBQyxJQUFJO1FBQ04sT0FBTztZQUNILE1BQU07WUFDTixFQUFDLEtBQUssRUFBRSxnQkFBYyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQztZQUNuRixDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXJrU3BlY30gZnJvbSBcInByb3NlbWlycm9yLW1vZGVsXCI7XG5cbmV4cG9ydCBjb25zdCBmb250U2l6ZTogTWFya1NwZWMgPSB7XG4gICAgZXhjbHVkZXM6IFwiZm9udFNpemVcIixcbiAgICBncm91cDogXCJmb250U2l6ZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICAgIGZvbnRTaXplOiB7fSxcbiAgICB9LFxuICAgIHBhcnNlRE9NOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRhZzogXCJzcGFuW2RhdGEtZm9udC1zaXplXVwiLFxuICAgICAgICAgICAgZ2V0QXR0cnM6IGRvbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IChkb20gYXMgRWxlbWVudCkuZ2V0QXR0cmlidXRlKFwiZGF0YS1mb250LXNpemVcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpemUgPyB7Zm9udFNpemU6IHNpemV9IDogZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgdG9ET00obWFyaykge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7c3R5bGU6IGBmb250LXNpemU6ICR7bWFyay5hdHRycy5mb250U2l6ZX1gLCBcImRhdGEtZm9udC1zaXplXCI6IG1hcmsuYXR0cnMuZm9udFNpemV9LFxuICAgICAgICAgICAgMFxuICAgICAgICBdO1xuICAgIH0sXG59O1xuIl19
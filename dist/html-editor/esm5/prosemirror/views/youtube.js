import { removeSelectedNode } from "prosemirror-utils";
export function createYoutubeIframe(id, start) {
    var iframe = document.createElement("iframe");
    iframe.height = "200px";
    iframe.width = "100%";
    iframe.src = "https://www.youtube.com/embed/" + id + (start ? "?start=" + start : "");
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    return iframe;
}
// https://www.youtube.com/watch?v=m3V7_Ov52sY
var YoutubeNodeView = /** @class */ (function () {
    function YoutubeNodeView(node, view, eventManager) {
        var _this = this;
        this.view = view;
        this.dom = document.createElement("div");
        this.dom.style.position = "relative";
        this.dom.style.overflow = "hidden";
        this.dom.style.height = "200px";
        this.dom.style.marginTop = "16px";
        this.dom.appendChild(createYoutubeIframe(node.attrs.id, node.attrs.start));
        var overlay = this.dom.appendChild(document.createElement("div"));
        overlay.style.position = "absolute";
        overlay.style.left = "0px";
        overlay.style.top = "0px";
        overlay.style.width = "100%";
        overlay.style.height = "200px";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        var button = overlay.appendChild(document.createElement("ion-button"));
        button.classList.add("ionx--interactive");
        button.setAttribute("color", "primary");
        this.deleteUnlisten = eventManager.addEventListener(button, "click", function () { return _this.deleteNode(); });
        var icon = document.createElement("ion-icon");
        icon.setAttribute("name", "trash");
        icon.slot = "icon-only";
        button.appendChild(icon);
    }
    YoutubeNodeView.prototype.deleteNode = function () {
        this.view.dispatch(removeSelectedNode(this.view.state.tr));
    };
    YoutubeNodeView.prototype.selectNode = function () {
        this.dom.classList.add("ionx--selected");
    };
    YoutubeNodeView.prototype.deselectNode = function () {
        this.dom.classList.remove("ionx--selected");
    };
    YoutubeNodeView.prototype.update = function (node) {
        return false;
    };
    YoutubeNodeView.prototype.destroy = function () {
        if (this.deleteUnlisten) {
            this.deleteUnlisten();
        }
    };
    YoutubeNodeView.prototype.stopEvent = function (event) {
        return false;
    };
    YoutubeNodeView.prototype.ignoreMutation = function () {
        return true;
    };
    return YoutubeNodeView;
}());
export { YoutubeNodeView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9pb25pYy1leHRlbnNpb25zL2h0bWwtZWRpdG9yLyIsInNvdXJjZXMiOlsicHJvc2VtaXJyb3Ivdmlld3MveW91dHViZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUdyRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsRUFBVSxFQUFFLEtBQWM7SUFFMUQsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUN4QixNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUN0QixNQUFNLENBQUMsR0FBRyxHQUFHLG1DQUFpQyxFQUFFLElBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUNwRixNQUFNLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztJQUN6QixNQUFNLENBQUMsS0FBSyxHQUFHLHlFQUF5RSxDQUFDO0lBQ3pGLE1BQU0sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBRTlCLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFFRCw4Q0FBOEM7QUFDOUM7SUFFSSx5QkFBWSxJQUFVLEVBQVksSUFBZ0IsRUFBRSxZQUEwQjtRQUE5RSxpQkE0QkM7UUE1QmlDLFNBQUksR0FBSixJQUFJLENBQVk7UUFFOUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFFbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRTNFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNwRSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7UUFFeEMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztRQUU5RixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQU1PLG9DQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2IsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFFSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELG1DQUFTLEdBQVQsVUFBVSxLQUFZO1FBQ2xCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWxFRCxJQWtFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRNYW5hZ2VyfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHtOb2RlfSBmcm9tIFwicHJvc2VtaXJyb3ItbW9kZWxcIjtcbmltcG9ydCB7cmVtb3ZlU2VsZWN0ZWROb2RlfSBmcm9tIFwicHJvc2VtaXJyb3ItdXRpbHNcIjtcbmltcG9ydCB7RWRpdG9yVmlldywgTm9kZVZpZXd9IGZyb20gXCJwcm9zZW1pcnJvci12aWV3XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVZb3V0dWJlSWZyYW1lKGlkOiBzdHJpbmcsIHN0YXJ0Pzogc3RyaW5nKSB7XG5cbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIGlmcmFtZS5oZWlnaHQgPSBcIjIwMHB4XCI7XG4gICAgaWZyYW1lLndpZHRoID0gXCIxMDAlXCI7XG4gICAgaWZyYW1lLnNyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2lkfSR7c3RhcnQgPyBcIj9zdGFydD1cIiArIHN0YXJ0IDogXCJcIn1gO1xuICAgIGlmcmFtZS5mcmFtZUJvcmRlciA9IFwiMFwiO1xuICAgIGlmcmFtZS5hbGxvdyA9IFwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIjtcbiAgICBpZnJhbWUuYWxsb3dGdWxsc2NyZWVuID0gdHJ1ZTtcblxuICAgIHJldHVybiBpZnJhbWU7XG59XG5cbi8vIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bTNWN19PdjUyc1lcbmV4cG9ydCBjbGFzcyBZb3V0dWJlTm9kZVZpZXcgaW1wbGVtZW50cyBOb2RlVmlldyB7XG5cbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBOb2RlLCBwcm90ZWN0ZWQgdmlldzogRWRpdG9yVmlldywgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIpIHtcblxuICAgICAgICB0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuZG9tLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICB0aGlzLmRvbS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHRoaXMuZG9tLnN0eWxlLmhlaWdodCA9IFwiMjAwcHhcIjtcbiAgICAgICAgdGhpcy5kb20uc3R5bGUubWFyZ2luVG9wID0gXCIxNnB4XCI7XG5cbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoY3JlYXRlWW91dHViZUlmcmFtZShub2RlLmF0dHJzLmlkLCBub2RlLmF0dHJzLnN0YXJ0KSk7XG5cbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IHRoaXMuZG9tLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICAgICAgICBvdmVybGF5LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICBvdmVybGF5LnN0eWxlLmxlZnQgPSBcIjBweFwiO1xuICAgICAgICBvdmVybGF5LnN0eWxlLnRvcCA9IFwiMHB4XCI7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5oZWlnaHQgPSBcIjIwMHB4XCI7XG4gICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBvdmVybGF5LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcblxuICAgICAgICBjb25zdCBidXR0b24gPSBvdmVybGF5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24tYnV0dG9uXCIpKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpb254LS1pbnRlcmFjdGl2ZVwiKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIFwicHJpbWFyeVwiKTtcbiAgICAgICAgdGhpcy5kZWxldGVVbmxpc3RlbiA9IGV2ZW50TWFuYWdlci5hZGRFdmVudExpc3RlbmVyKGJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLmRlbGV0ZU5vZGUoKSk7XG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24taWNvblwiKTtcbiAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidHJhc2hcIik7XG4gICAgICAgIGljb24uc2xvdCA9IFwiaWNvbi1vbmx5XCI7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZVVubGlzdGVuOiBGdW5jdGlvbjtcblxuICAgIGRvbTogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGRlbGV0ZU5vZGUoKSB7XG4gICAgICAgIHRoaXMudmlldy5kaXNwYXRjaChyZW1vdmVTZWxlY3RlZE5vZGUodGhpcy52aWV3LnN0YXRlLnRyKSk7XG4gICAgfVxuXG4gICAgc2VsZWN0Tm9kZSgpIHtcbiAgICAgICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChcImlvbngtLXNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIGRlc2VsZWN0Tm9kZSgpIHtcbiAgICAgICAgdGhpcy5kb20uY2xhc3NMaXN0LnJlbW92ZShcImlvbngtLXNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIHVwZGF0ZShub2RlOiBOb2RlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmRlbGV0ZVVubGlzdGVuKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVVubGlzdGVuKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZ25vcmVNdXRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIl19
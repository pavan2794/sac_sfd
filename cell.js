(function() {
    let template = document.createElement("template");
    template.innerHTML = `
    <style>
    /* Style for the container block */
    .container {
        display: flex; /* Use flexbox to arrange the blocks side by side */
        flex-wrap: wrap; /* Allow blocks to wrap when the viewport is narrow */
        justify-content: center; /* Center the blocks horizontally */
        background-color: #cdcdcd;
        min-height: 50vh; /* Set the container height to at least the viewport height */
    }
    .block-container {
        flex: 1; /* Distribute available space equally between blocks */
        width: calc(50% - 40px); /* Decrease the width of the blocks and consider margin */
        padding: 10px;
        border: 1px solid #ccc;
        text-align: center;
        background-color: #ff0000;
        margin: 30px; /* Increase the margin to create space between blocks */
        box-sizing: border-box; /* Include padding and border in width calculation */
    }

    /* Style for Production Cell Name */
    .text-cell-name {
        font-size: 18px;
        color: #333;
        margin-top: 10px;
    }

    /* Style for Production Cell Code */
    .text-cell-code {
        font-size: 18px;
        color: #333;
        margin-bottom: 10px;
    }

    /* Style for the icon images */
    .icon {
        width: 50px; /* Adjust the width as needed */
        height: 50px; /* Adjust the height as needed */
        margin: 10px;
    }
</style>

<div class="container">
    <div class="block-container">
        <p class="text-cell-name">Production Cell Name</p>
        <p class="text-cell-code">Production Cell Code</p>
        <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Changeover.png" alt="Icon 1" class="icon">
        <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Logistics.png" alt="Icon 2" class="icon">
        <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Maintenance.png" alt="Icon 3" class="icon">
        <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Quality.png" alt="Icon 4" class="icon">
    </div>

    <div class="block-container">
        <p class="text-cell-name">Production Cell Name</p>
        <p class="text-cell-code">Production Cell Code</p>
        <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Changeover.png" alt="Icon 1" class="icon">
        <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Logistics.png" alt="Icon 2" class="icon">
        <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Maintenance.png" alt="Icon 3" class="icon">
        <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Quality.png" alt="Icon 4" class="icon">
    </div>
</div>
<div class="container">
<div class="block-container">
    <p class="text-cell-name">Production Cell Name</p>
    <p class="text-cell-code">Production Cell Code</p>
    <img 		src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Changeover.png" alt="Icon 1" class="icon">
    <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Logistics.png" alt="Icon 2" class="icon">
    <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Maintenance.png" alt="Icon 3" class="icon">
    <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Quality.png" alt="Icon 4" class="icon">
</div>

<div class="block-container">
    <p class="text-cell-name">Production Cell Name</p>
    <p class="text-cell-code">Production Cell Code</p>
    <img 		src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Changeover.png" alt="Icon 1" class="icon">
    <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Logistics.png" alt="Icon 2" class="icon">
    <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Maintenance.png" alt="Icon 3" class="icon">
    <img src="https://raw.githubusercontent.com/pavan2794/sac_sfd/main/Quality.png" alt="Icon 4" class="icon">
</div>

</div>
`;

    class Cell extends HTMLElement {
    constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.addEventListener("click", event => {
    var event = new Event("onClick");
    this.dispatchEvent(event);
    });
    this._props = {};
    }
    onCustomWidgetBeforeUpdate(changedProperties) {
    this._props = { ...this._props, ...changedProperties };
    }
    onCustomWidgetAfterUpdate(changedProperties) {
    if ("color" in changedProperties) {
    this.style["background-color"] = changedProperties["color"];
    }
    if ("opacity" in changedProperties) {
    this.style["opacity"] = changedProperties["opacity"];
    }
    }
    }
    customElements.define("production-cell", Cell);
   })();
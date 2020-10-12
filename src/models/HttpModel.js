export default class HttpModel {
    constructor(source) {
        this.Resource = source ? source.Resource === null ? "" : source.Resource : "";
        this.MethodType = source ? source.MethodType === null ? "" : source.MethodType : "";
        this.ResourceUrl = source ? source.ResourceUrl === null ? "" : source.ResourceUrl : "";
    }
}
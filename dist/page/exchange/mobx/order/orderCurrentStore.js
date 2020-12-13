var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action } from 'mobx';
class OrderCurrentStore {
    constructor() {
        this.orderCurrentList = [];
    }
    //更新当前委托
    updateOrderCurrentList(data) {
        this.orderCurrentList = data;
    }
    // 撤单
    cancelOrder(id) {
        console.log(id, 'id');
        let newList = [];
        if (id && id !== '') {
            newList = this.orderCurrentList.filter(item => (item.id !== id));
        }
        this.orderCurrentList = newList;
    }
}
__decorate([
    observable
], OrderCurrentStore.prototype, "orderCurrentList", void 0);
__decorate([
    action.bound
], OrderCurrentStore.prototype, "updateOrderCurrentList", null);
__decorate([
    action.bound
], OrderCurrentStore.prototype, "cancelOrder", null);
export default OrderCurrentStore;
//# sourceMappingURL=orderCurrentStore.js.map
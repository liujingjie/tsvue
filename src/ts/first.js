import { ref, reactive } from "vue";
import router from '@/router';
export default {
    setup() {
        const chosenAddressId = ref('1');
        const showEdit = ref(false);
        const list = reactive([
            {
                id: '1',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
                isDefault: true,
            },
            {
                id: '2',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号',
            },
        ]);
        const disabledList = reactive([
            {
                id: '3',
                name: '王五',
                tel: '1320000000',
                address: '浙江省杭州市滨江区江南大道 15 号',
            },
        ]);
        const onAdd = () => {
            showEdit.value = true;
        };
        const onClickLeft = () => {
            router.back();
        };
        const onClickRight = () => {
            router.push('/todoList');
        };
    }
};
//# sourceMappingURL=first.js.map
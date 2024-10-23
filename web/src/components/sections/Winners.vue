<script setup>
import MaxWidth from '@/components/ui/MaxWidth.vue';
import { CAccordion, CAccordionItem, CAccordionBody, CAccordionHeader } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import { onMounted, ref } from 'vue';
import { fetchWinners } from '@/axios/main';

const cards = ref([]);

const searchByWinners = async () => {
    try {
        const data = await fetchWinners();
        cards.value = data;
    } catch (error) {
        console.log(error);
    }
}

const formatDate = (timestamp) => {
    const fixZero = (time) => time < 10 ? `0${time}` : 0 ;

    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${fixZero(day)}/${fixZero(month)}/${year}`;
}

onMounted(() => {
    searchByWinners();
});
</script>

<template>
    <section>
        <MaxWidth>
            <div id="ganhadores">
                <h1 class="font-semibold">GANHADORES</h1>
                <CAccordion style="width: 100%;">
                    <CAccordionItem v-for="(card, index) in cards" :key="index" :item-key="index + 1">
                        <CAccordionHeader>
                            {{ card.name }}
                        </CAccordionHeader>
                        <CAccordionBody>
                            <ul>
                                <li><strong>Nome:</strong> {{ card.name }}</li>
                                <li><strong>Prêmio:</strong> {{ card.prize }}</li>
                                <li><strong>Data:</strong> {{ formatDate(card.date) }}</li>
                            </ul>
                        </CAccordionBody>
                    </CAccordionItem>
                </CAccordion>
            </div>
        </MaxWidth>
    </section>
</template>

<style scoped>
section h1 {
    color: #4169e1;
    text-align: center;
    padding: 45px 0px;
}

.button-area {
    padding: 45px 0px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#ganhadores {
    padding-bottom: 45px;
}

ul li {
    list-style: none;
}
</style>

<script setup>
import MaxWidth from '@/components/ui/MaxWidth.vue';
import { CAccordion, CAccordionItem, CAccordionBody, CAccordionHeader } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import { ref } from 'vue';

const cards = ref([
    { stepNumber: "01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dolor lacus. Aliquam nibh mauris, venenatis a mollis eget, viverra et mauris." },
    { stepNumber: "02", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dolor lacus. Aliquam nibh mauris, venenatis a mollis eget, viverra et mauris." },
    { stepNumber: "03", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dolor lacus. Aliquam nibh mauris, venenatis a mollis eget, viverra et mauris." },
    { stepNumber: "04", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dolor lacus. Aliquam nibh mauris, venenatis a mollis eget, viverra et mauris." }
]);
</script>

<template>
    <section id="duvidas-frequentes">
        <MaxWidth>
            <div>
                <h1 class="font-semibold">DÚVIDAS FREQUENTES</h1>
                <CAccordion style="width: 100%;">
                    <CAccordionItem :item-key="1">
                        <CAccordionHeader>
                            Accordion Item #1
                        </CAccordionHeader>
                        <CAccordionBody>
                            <strong>{{ cards[0].content }}</strong>
                        </CAccordionBody>
                    </CAccordionItem>

                    <CAccordionItem :item-key="2">
                        <CAccordionHeader>
                            Accordion Item #2
                        </CAccordionHeader>
                        <CAccordionBody>
                            <strong>{{ cards[1].content }}</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem :item-key="3">
                        <CAccordionHeader>
                            Accordion Item #3
                        </CAccordionHeader>
                        <CAccordionBody>
                            <strong>{{ cards[2].content }}</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem :item-key="4">
                        <CAccordionHeader>
                            Accordion Item #4
                        </CAccordionHeader>
                        <CAccordionBody>
                            <strong>{{ cards[3].content }}</strong>
                        </CAccordionBody>
                    </CAccordionItem>
                </CAccordion>
            </div>
        </MaxWidth>
    </section>
</template>

<style scoped>
section {
    background-color: #efefef;
}

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
#duvidas-frequentes {
    padding-bottom: 45px;
}
</style>

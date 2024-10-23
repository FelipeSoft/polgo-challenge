<script setup>
import MaxWidth from '@/components/ui/MaxWidth.vue';
import StepCard from '@/components/ui/StepCard.vue';
import Button from "@/components/ui/Button.vue";

const cards = [
    { stepNumber: "1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dolor lacus. Aliquam nibh mauris, venenatis a mollis eget, viverra et mauris." },
    { stepNumber: "2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dolor lacus. Aliquam nibh mauris, venenatis a mollis eget, viverra et mauris." },
    { stepNumber: "3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dolor lacus. Aliquam nibh mauris, venenatis a mollis eget, viverra et mauris." },
    { stepNumber: "4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dolor lacus. Aliquam nibh mauris, venenatis a mollis eget, viverra et mauris." }
];
</script>

<template>
    <section id="como-participar">
        <MaxWidth>
            <div class="how-to-participate-section">
                <h1 class="font-semibold">COMO PARTICIPAR</h1>
                <div id="steps" class="grid grid-cols-4">
                    <StepCard v-for="(card, index) in cards" :key="index" :content="card.content"
                        :stepNumber="card.stepNumber" />
                </div>
                <Button variant="default">Cadastre-se agora mesmo!</Button>
            </div>
        </MaxWidth>
    </section>
</template>

<style scoped>
.how-to-participate-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#steps {
    margin: 60px 0px;
}

section {
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    padding: 45px 0px;
    align-items: center;
    justify-content: space-between;
}

section h1 {
    color: #4169e1;
}

.grid {
    display: grid;
}

.grid-cols-4 {
    grid-template-columns: 1fr;
    gap: 20px;
}

@media screen and (min-width: 1024px) {
    #steps {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    #steps {
        grid-template-columns: 1fr 1fr;
    }
}
</style>

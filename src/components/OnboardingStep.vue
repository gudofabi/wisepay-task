<template>
  <div >
    <div class="step-container">
        <div class="icon-cover">
                <svg v-if="process.passed" xmlns="http://www.w3.org/2000/svg" class="icon h-6 w-6 done" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <template v-else>
                    <div class="step-number done" v-if="process.passed">
                        {{ process.step }}
                    </div>
                    <div class="step-number" v-else :class="[process.inprogress ? 'in-progress' : '']">
                        {{ process.step }}
                    </div>
                </template>

        </div>
        <p class="mb-0 ml-5 font-weight-bold done" v-if="process.passed">{{ process.name }}</p>
        <p class="mb-0 ml-5 font-weight-bold" v-else :class="[process.inprogress ? 'in-progress' : '']">{{ process.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        process: {
            type: [Object, Array],
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
.step-container {
    display: flex;
    align-items: center;
    padding: 30px 0;

    .icon-cover {
        width: 40px;
        height: 40px;
        text-align: center;

        .icon {
            width: 100%;

        }

        .step-number {
            border-radius: 100%;
            width: 100%;
            height: 100%;
            border: 1px solid #000;
            font-size: 20px;
            line-height: 2.5rem;
            background: white;
        }

        .in-progress {
            border-color: #0b9ef7;
        }

        .done {
            border-color: #7e7e7e;
        }
    }

    p {
        font-family: 'Poppins';
        font-weight: 400 !important;

    }

    .in-progress {
        color: #0b9ef7;
    }

    .done {
        color: #7e7e7e;
    }
}
</style>
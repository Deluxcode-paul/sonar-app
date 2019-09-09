<template>
    <div class="flow flex flex-space center-x center-y">
        <div class="flow-step">
            <div class="step-content">
                <h3>Sign up</h3>
            </div>
        </div>
        <svg viewbox="0 0 10 200">
            <line x1="0" x2="200" y1="5" y2="5" />
        </svg>
        <div class="flow-step" style="margin-top: 100px">
            <div class="step-content">
                <img src="/assets/alec.jpg">
                <h3 class="expert">Meet your<br>Sonar Expert</h3>
            </div>
        </div>
        <svg viewbox="0 0 10 200">
            <line x1="0" x2="200" y1="5" y2="5" />
        </svg>
        <div class="flow-step" style="margin-top: 100px">
            <div class="step-content">
                <h3>Full steam ahead!</h3>
                <p>Discover why hundreds of companies trust Sonar for their company.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'accountFlowHorizontal'
}
</script>
<style scoped>
p {
    margin-bottom: 1em;
    margin-top: 1em;
    font-size: 0.95rem;
    font-weight: 300;
}

.expert {
    margin-top: 1em;
}

.flow-step div {
    justify-content: center;
    line-height: 2;
    width: 200px;
    text-align: center;
    color: white;
    border-radius: 4px;

}

.flow-step {
    padding: 10px;
    text-align: center;
    position: relative;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

svg {
    height: 10px;
    width: 155px;
}

svg line {
    stroke: rgba(255, 255, 255, 0.5);
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-dasharray: 2px 20px;
    animation: animateline 4s linear both infinite;
}

h3 {
    font-size: 1.5em;
    line-height: 1.5;
    font-family: 'Inter', sans-serif;
    color: #fff;
}

.flow-step div img {
    width: 40%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 10px;
    animation: expert 3s ease-in-out infinite;

}

@keyframes animateline {
    from {
        stroke-dashoffset: 0;
    }

    to {
        stroke-dashoffset: -130px;
    }
}

@keyframes expert {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}
</style>
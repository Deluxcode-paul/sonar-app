<template>
    <section class="flow-bound">
        <div class="flow-bound__signup">
            <h3>Sign up</h3>
        </div>
        <svg viewbox="0 0 10 100">
            <line x1="5" x2="5" y1="0" y2="100" />
        </svg>
        <div class="flow-bound__build">
            <div class="build--powered">
                <img src="/assets/alec.jpg">
                <h3 class="expert">Meet your Sonar Expert</h3>
            </div>
        </div>
        <svg viewbox="0 0 10 100">
            <line x1="5" x2="5" y1="0" y2="100" />
        </svg>
        <div class="flow-bound__deploy">
            <h3>Full steam ahead!</h3>
            <p>Discover why hundreds of companies trust Sonar for their company.</p>
        </div>
        <div class="flow-bound__final">
            <a href="/register" class="button opaque big" style="color: white">Get started now</a>
        </div>
    </section>
</template>
<script>
export default {
    name: 'accountFlow'
}
</script>
<style scoped>
p {
    margin-bottom: 1em;
    margin-top: 1em;
}

.expert {
    margin-top: 1em;
}

.flow-bound__signup {
    margin-bottom: 20px;
    padding-top: 50px;
}

.card,
.flow-bound__sources div,
.flow-bound__build div {
    line-height: 2;
    color: white;
    border-radius: 4px;

}

.flow-bound__build {
    padding: 40px;
    width: 100%;
    border-radius: 8px;
    background: none;
    position: relative;
}


.flow-bound__final {
    padding: 40px;
    width: 100%;
    padding-top: 90px;
    border-radius: 8px;
    background: none;
    position: relative;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.flow-bound {
    max-height: 1170px;
    padding-left: 40px;
    padding-right: 40px;
    background: linear-gradient(to bottom, transparent, #004371);
    color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.flow-bound svg {
    height: 125px;
    width: 10px;
}

.build--stack {
    padding-top: 5px;
    background: none !important;
    color: white !important;
    box-shadow: none !important;
}

.flow-bound svg line {
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

p {
    font-size: 0.95rem;
    font-weight: 300;
}

.flow-bound__sources {
    display: flex;
    border-radius: 8px;
    padding: 1.5rem;
    background: #f9f9f9;
    position: relative;
}

.flow-bound__sources div {
    text-align: left;
    margin: 0 1rem;
}


.flow-bound__build div img {
    width: 30%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 10px;

}

.flow-bound__deploy {
    padding: 1.5rem;
    margin-bottom: 30px;
    border-radius: 8px;
    position: relative;
}

.flow-bound__deploy:before {
    content: '';
}

@media (max-width: 700px) {
    .flow-bound__sources {
        flex-direction: column;
    }

    .flow-bound__sources div {
        margin: 1rem 0;
    }
}

@keyframes animateline {
    from {
        stroke-dashoffset: 0;
    }

    to {
        stroke-dashoffset: -130px;
    }
}
</style>
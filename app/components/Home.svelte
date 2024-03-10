<page>
    <actionBar class="text-center text-4xl bg-gray-300 font-bold pb-1 mb-2" title="Calculadora basica" />
    <tabView>
        <tabViewItem title="Calculadora" >
                <label  textWrap="true">Aca va la calculadora</label>
        </tabViewItem>
        <tabViewItem title="Historial">
                <label textWrap="true">Aca va el historial</label>
        </tabViewItem>
        <gridLayout columns="*,120" rows="70,*">
                <StackLayout     class="m-2">
                        <StackLayout   class="flex w-full py-1 gap-1">
                            <button class="btn btn-orange" on:tap={() => clearDisplay()}>CE</button>
                            <button class="btn btn-orange" on:tap={() => deleteLast()}>C</button>
                            <button class="btn btn-red">±</button>
                            <button class="btn btn-red" on:tap={() => addOperator('%')}>%</button>
                        </StackLayout>
                        <StackLayout   class="flex w-full py-1 gap-1">
                            <button class="btn btn-blue" on:tap={() => AddNumber('7')}>7</button>
                            <button class="btn btn-blue" on:tap={() => AddNumber('8')}>8</button>
                            <button class="btn btn-blue" on:tap={() => AddNumber('9')}>9</button>
                            <button class="btn btn-red" on:tap={() => addOperator('÷')}>÷</button>
                        </StackLayout>
                    
                        <StackLayout   class="flex w-full py-1 gap-1">
                            <button class="btn btn-blue" on:tap={() => AddNumber('4')}>4</button>
                            <button class="btn btn-blue" on:tap={() => AddNumber('5')}>5</button>
                            <button class="btn btn-blue" on:tap={() => AddNumber('6')}>6</button>
                            <button class="btn btn-red" on:tap={() => addOperator('*')}>x</button>
                        </StackLayout>
                    
                        <StackLayout   class="flex w-full py-1 gap-1">
                            <button class="btn btn-blue" on:tap={() => AddNumber('1')}>1</button>
                            <button class="btn btn-blue" on:tap={() => AddNumber('2')}>2</button>
                            <button class="btn btn-blue" on:tap={() => AddNumber('3')}>3</button>
                            <button class="btn btn-red" on:tap={() => addOperator('-')}>-</button>
                        </StackLayout>
                        <StackLayout   class="flex w-full py-1 gap-1">
                            <button class="btn btn-blue" on:tap={() => AddNumber('0')}>0</button>
                            <button class="btn btn-blue">.</button>
                            <button class="btn btn-green" on:tap={() => calculate()}>=</button>
                            <button class="btn btn-red" on:tap={() => addOperator('+')}>+</button>
                        </StackLayout>
                    </StackLayout>
        </gridLayout>
</tabView>
</page>
<script lang="ts">
    
</script>

<StackLayout class="bg-black py-7 text-white text-right m-2">
    
</StackLayout>


<style>
    .btn {
        @apply flex-grow text-center p-4 flex-1 m-1 w-full;
    }
    .btn-blue {
        @apply bg-blue-700 text-white;
    }
    .btn-orange {
        @apply bg-orange-400 text-white;
    }
    .btn-green {
        @apply bg-green-600 text-white;
    }
    .btn-red {
        @apply bg-red-800 text-white;
    }
</style>

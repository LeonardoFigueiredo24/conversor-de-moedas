function converterMoeda() {
    const taxaDeCambio = 0.17; // 1 BRL = 0,17 USD
    const brlInput = document.getElementById("brl").value;

    if (!brlInput || brlInput < 0) {
        document.getElementById("resultado").innerText = "⚠️ Insira um valor válido em BRL.";
        document.getElementById("resultado").style.color = "red";
        return;
    }

    const valorEmUSD = (brlInput * taxaDeCambio).toFixed(2);
    document.getElementById("resultado").innerText = `💵 Valor em USD: $ ${valorEmUSD}`;
    document.getElementById("resultado").style.color = "#34c759";
}

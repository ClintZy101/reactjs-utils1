function copyToClipboard () {
    let output = '';
    if (this.data !== null && this.data.items.length > 0) {
      this.data.items.forEach(item => {
        const itemName = this.detailsType === 'summary' ? item.item_name : item.description;
        output += `(${item.category.toUpperCase()}) ${itemName}\n${item.quantity} x ${item.amount}\n\n`;
      });
      output += `\n------------------------------\nSubtotal: ${this.data.formattedTotalPrice}\nDiscount: ${PESO(this.discount).format()}\nTotal: ${this.getTotal}`
      copyToClipboard(output)
        .then(() => {
          this.$q.notify({
            message: 'Copied to clipboard'
          });
        })
        .catch(() => {
          this.$q.notify({
            message: 'Unable to copy',
            color: 'warning'
          });
        });
    }
  }

 


  const [copied, setCopied] = useState(false)

   const copyToClipboard = async e => {
        window.getSelection().removeAllRanges();
        var range = document.createRange();
        range.selectNode(this.textContent);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
      setCopied(true);
      };
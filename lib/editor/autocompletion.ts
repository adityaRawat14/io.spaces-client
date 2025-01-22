export const htmlCompletionItems = [
    {
      label: 'html',
      insertText: [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '<head>',
        '\t<meta charset="UTF-8">',
        '\t<title></title>',
        '</head>',
        '<body>',
        '\t$1',
        '</body>',
        '</html>'
      ].join('\n'),
    },
    { label: 'div', insertText: '<div>$1</div>' },
    { label: 'span', insertText: '<span>$1</span>' },
    { label: 'p', insertText: '<p>$1</p>' },
    { label: 'a', insertText: '<a href="$1">$2</a>' },
    { label: 'img', insertText: '<img src="$1" alt="$2">' },
    { label: 'ul', insertText: '<ul>\n\t<li>$1</li>\n</ul>' },
    { label: 'ol', insertText: '<ol>\n\t<li>$1</li>\n</ol>' },
    { label: 'li', insertText: '<li>$1</li>' },
    { label: 'table', insertText: '<table>\n\t<tr>\n\t\t<td>$1</td>\n\t</tr>\n</table>' },
    { label: 'tr', insertText: '<tr>\n\t<td>$1</td>\n</tr>' },
    { label: 'td', insertText: '<td>$1</td>' },
    { label: 'th', insertText: '<th>$1</th>' },
    { label: 'thead', insertText: '<thead>\n\t<tr>\n\t\t<th>$1</th>\n\t</tr>\n</thead>' },
    { label: 'tbody', insertText: '<tbody>\n\t<tr>\n\t\t<td>$1</td>\n\t</tr>\n</tbody>' },
    { label: 'tfoot', insertText: '<tfoot>\n\t<tr>\n\t\t<td>$1</td>\n\t</tr>\n</tfoot>' },
    { label: 'form', insertText: '<form action="$1" method="$2">\n\t<label for="$3">$4</label>\n\t<input type="$5" id="$3" name="$3">\n\t<button type="submit">Submit</button>\n</form>' },
    { label: 'input', insertText: '<input type="$1" placeholder="$2">' },
    { label: 'button', insertText: '<button type="$1">$2</button>' },
    { label: 'label', insertText: '<label for="$1">$2</label>' },
    { label: 'h1', insertText: '<h1>$1</h1>' },
    { label: 'h2', insertText: '<h2>$1</h2>' },
    { label: 'h3', insertText: '<h3>$1</h3>' },
    { label: 'h4', insertText: '<h4>$1</h4>' },
    { label: 'h5', insertText: '<h5>$1</h5>' },
    { label: 'h6', insertText: '<h6>$1</h6>' },
    { label: 'blockquote', insertText: '<blockquote>$1</blockquote>' },
    { label: 'hr', insertText: '<hr>' },
    { label: 'meta', insertText: '<meta name="$1" content="$2">' },
    { label: 'canvas', insertText: '<canvas id="$1" width="$2" height="$3"></canvas>' },
    { label: 'svg', insertText: '<svg width="$1" height="$2">$3</svg>' },
    { label: 'body', insertText: '<body >$1</body>' },
    { label: 'head', insertText: '<head >$1</head>' },
    { label: 'title', insertText: '<title >$1</title>' },
  ];








  
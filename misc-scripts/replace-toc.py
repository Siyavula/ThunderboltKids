import sys

from lxml import etree


if __name__ == "__main__":
    htmlfilename, toc = sys.argv[1:]

    with open(htmlfilename, 'r') as f:
        html = etree.HTML(f.read())


    newtoc = etree.HTML(open(toc, 'r').read()).find('.//div')

    oldtoc = html.find('.//div[@class="navbar navbar-fixed-top span3"]')

    oldtoc.getparent().replace(oldtoc, newtoc)


    with open(htmlfilename, 'w') as f:
        f.write('<!DOCTYPE html>\n')
        f.write(etree.tostring(html, method='html', pretty_print=True))



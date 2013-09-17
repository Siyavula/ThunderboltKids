import sys

from lxml import etree


if __name__ == "__main__":
    htmlfilename, header, footer = sys.argv[1:]

    with open(htmlfilename, 'r') as f:
        html = etree.HTML(f.read())


    newfooter = etree.HTML(open(footer, 'r').read()).find('.//footer')
    newheader = etree.HTML(open(header, 'r').read()).find('.//head')

    oldheader = html.find('.//head')
    oldfooter = html.find('.//footer')

    oldheader.getparent().replace(oldheader, newheader)
    oldfooter.getparent().replace(oldfooter, newfooter)


#   for html5tag in ['aside' ,'section', 'figure', 'figcaption', 'article', 'footer']:
#       for tag in html.findall('.//%s' % html5tag):
#           if 'class' in tag.attrib.keys():
#               cssclass = tag.attrib['class']
#           else:
#               cssclass = ''

#           ie8before = r'[if lt IE 9]><div class="{cssclass}"><![endif]'.format(cssclass=cssclass)
#           ie8after = r'[if lt IE 9]></div><![endif]'

#           tag.addprevious(etree.Comment(ie8before))
#           tag.addnext(etree.Comment(ie8after))


    with open(htmlfilename, 'w') as f:
        f.write('<!DOCTYPE html>\n')
        f.write(etree.tostring(html, method='html', pretty_print=True))



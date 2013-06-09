#!/usr/bin/env python
# -*- coding: utf-8 -*-


from jinja2 import Environment, PackageLoader

env = Environment(loader=PackageLoader('site-generator', 'templates'))

def generate_page(template, navbar, footer, content):
    '''generate an html page from the given snippets'''
    
    return template.render(footer=footer, content=content, navbar=navbar)

def save_page(pagestring, path):
    try:
        outputfile = open(path, 'w')
        outputfile.write(pagestring.encode('utf-8'))
        outputfile.close()
        return 0
    except Exception as E:
        print E
        return 1



if __name__ == "__main__":

    # Home page
    base = env.get_template('base.html')
    footer = env.get_template('footer.html').render()
    navbar = env.get_template('navbar.html').render()
    main = env.get_template('homepage-content.html').render()
    page = generate_page(base, navbar, footer, main)
    save_page(page, 'build/index.html')

    # About Project
    main = env.get_template('about-project.html').render()
    page = generate_page(base, navbar, footer, main)
    save_page(page, 'build/about-project.html')

    # Meet the kids
    main = env.get_template('meet-the-kids.html').render()
    page = generate_page(base, navbar, footer, main)
    save_page(page, 'build/meet-the-kids.html')

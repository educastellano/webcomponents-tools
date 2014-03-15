import sublime, sublime_plugin
import os
import subprocess

template = ''

class Webcomponents_previewCommand(sublime_plugin.TextCommand):
	port = 8899
	wc_path = 'wc_tmp'
	page = 'preview.html'

	def run(self, edit):
		# self.view.insert(edit, 0, "Hello, World!!!")
		if not os.path.exists(self.wc_path): 
			os.makedirs(self.wc_path)
		file_path = sublime.active_window().active_view().file_name()
		file_name = file_path.split('/')[-1]
		component_name = file_name.split('.html')[0] # TODO get the component name in another way...
		html = template.replace('{{component_name}}', component_name) # TODO make a proper template rendering
		subprocess.call('echo "' + template + '" > ' + self.wc_path + '/' + self.page)
		os.system('cd '+ self.wc_path +' && python -m SimpleHTTPServer ' + str(self.port))
		# subprocess.call(['', ''])
		# subprocess.call('')
		os.system('open http://localhost:' + str(self.port) + '/' + self.page)
		

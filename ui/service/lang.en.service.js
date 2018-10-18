angular.module('kityminderEditor')
.service('lang.en', function() {
	return {
		'en': {
			'template': {
				'default': 'Mind map',
				'tianpan': 'Sky map',
				'structure': 'Organization Chart',
				'filetree': 'Directory organization chart',
				'right': 'logical structure diagram',
				'fish-bone': 'Fish bone figure'
			},
			'theme': {
				'classic': 'The mind map classic',
				'classic-compact': 'Compact classic',
				'snow': 'gentle cold light',
				'snow-compact': 'Compact cold light',
				'fish': 'Fish bone map',
				'wire': 'wireframe',
				'fresh-red': 'Fresh red',
				'fresh-soil': 'Dirty yellow',
				'fresh-green': 'Artistic Green',
				'fresh-blue': 'Sky Blue',
				'fresh-purple': 'Romantic Purple',
				'fresh-pink': 'Mind powder',
				'fresh-red-compat': 'Compact red',
				'fresh-soil-compat': 'Compact yellow',
				'fresh-green-compat': 'Compact green',
				'fresh-blue-compat': 'Compact blue',
				'fresh-purple-compat': 'Compact purple',
				'fresh-pink-compat': 'Compact powder',
				'tianpan': 'Classic dial',
				'tianpan-compact': 'Compact day'
			},
			'maintopic': 'Center theme',
			'topic': 'branch topic',
			'panels': {
				'history': 'history',
				'template': 'template',
				'theme': 'skin',
				'layout': 'layout',
				'style': 'style',
				'font': 'text',
				'color': 'color',
				'background': 'background',
				'insert': 'insert',
				'arrange': 'adjust',
				'nodeop': 'current',
				'priority': 'priority',
				'progress': 'progress',
				'resource': 'resource',
				'note': 'note',
				'attachment': 'attachment',
				'word': 'text'
			},
			'error_message': {
				'title': 'Oh, the mind map is wrong',
				
				'err_load': 'Loading mind map failed',
				'err_save': 'Saving mind map failed',
				'err_network': 'Network error',
				'err_doc_resolve': 'Document parsing failed',
				'err_unknown': 'A strange error has occurred',
				'err_localfile_read': 'File read error',
				'err_download': 'File download failed',
				'err_remove_share': 'Cancel sharing failed',
				'err_create_share': 'Sharing failed',
				'err_mkdir': 'Directory creation failed',
				'err_ls': 'Read directory failed',
				'err_share_data': 'Load shared content error',
				'err_share_sync_fail': 'Share content sync failed',
				'err_move_file': 'File move failed',
				'err_rename': 'Rename failed',
				
				'unknownreason': 'Maybe an alien has messed with the code...',
				'pcs_code': {
					3: "This interface is not supported",
					4: "There is no permission to perform this operation",
					5: "IP is not authorized",
					110: "User session has expired, please log in again",
					31001: "Database query error",
					31002: "Database connection error",
					31003: "The database returns an empty result",
					31021: "Network error",
					31022: "The server cannot be connected temporarily",
					31023: "Input parameter error",
					31024: "app id is empty",
					31025: "Backend storage error",
					31041: "User's cookie is not a legal Baidu cookie",
					31042: "User is not logged in",
					31043: "User is not activated",
					31044: "User is not authorized",
					31045: "User does not exist",
					31046: "User already exists",
					31061: "The file already exists",
					31062: "Illegal file name",
					31063: "The file parent directory does not exist",
					31064: "There is no access to this file",
					31065: "The directory is full",
					31066: "The file does not exist",
					31067: "File processing error",
					31068: "File creation failed",
					31069: "File copy failed",
					31070: "File deletion failed",
					31071: "Cannot read file meta information",
					31072: "File movement failed",
					31073: "File rename failed",
					31079: "File MD5 was not found, please upload the entire file using the upload API.",
					31081: "Superfile creation failed",
					31082: "The list of superfile blocks is empty",
					31083: "Superfile update failed",
					31101: "Tag system internal error",
					31102: "The tag parameter is incorrect",
					31103: "tag system error",
					31110: "Unauthorized to set this directory quota",
					31111: "Quota management only supports two levels of directories",
					31112: "Exceeded quota",
					31113: "Quotas cannot exceed quotas for directory ancestors",
					31114: "Quotas cannot be smaller than subdirectory quotas",
					31141: "Request thumbnail service failed",
					31201: "Signature error",
					31202: "The file does not exist",
					31203: "Setting acl failed",
					31204: "Request acl verification failed",
					31205: "Get acl failed",
					31206: "acl does not exist",
					31207: "bucket already exists",
					31208: "User request error",
					31209: "Server Error",
					31210: "Server does not support",
					31211: "No access",
					31212: "Service is not available",
					31213: "Retry error",
					31214: "Failed to upload file data",
					31215: "Upload file meta failed",
					31216: "Download file data failed",
					31217: "Download file meta failed",
					31218: "Capacity exceeds quota",
					31219: "The number of requests exceeds the limit",
					31220: "Flow exceeded quota",
					31298: "The server returned a value KEY is illegal",
					31299: "The server return value KEY does not exist"
				}
			},
			'ui': {
				'shared_file_title': '[shared] {0} (read only)',
				'load_share_for_edit': 'Loading shared files...',
				'share_sync_success': 'Share content is synced',
				'recycle_clear_confirm': 'Are you sure to empty the recycle bin? The emptied files cannot be recovered. ',
				
				'fullscreen_exit_hint': 'Press Esc or F11 to exit full screen',
				
				'error_detail': 'details',
				'copy_and_feedback': 'Copy and feedback',
				'move_file_confirm': 'Move "{0}" to "{1}"? ',
				'rename': 'rename',
				'rename_success': '{0} rename succeeded',
				'move_success': '{0} moved successfully to {1}',
				
				'command': {
					'exportPNG': 'Export as PNG image',
					'exportSVG': 'Export as SVG image',
					'appendsiblingnode': 'Insert sibling theme',
					'appendparentnode': 'Insert superior theme',
					'appendchildnode': 'Insert subordinate theme',
					'removenode': 'delete',
					'editnode': 'Edit',
					'arrangeup': 'Upward',
					'arrangedown': 'Drop down',
					'resetlayout': 'Organize layout',
					'expandtoleaf': 'Expand all nodes',
					'expandtolevel1': 'Expand to level 1 node',
					'expandtolevel2': 'Expand to level 2 node',
					'expandtolevel3': 'Expand to level 3 node',
					'expandtolevel4': 'Expand to level 4 node',
					'expandtolevel5': 'Expand to level 5 node',
					'expandtolevel6': 'Expand to level 6 node',
					'fullscreen': 'full screen',
					'outline': 'outline'
				},
				
				'search': 'search',
				
				'export': 'export',
				
				'expandtoleaf': 'expand',
				
				'back': 'return',
				
				'undo': 'Undo (Ctrl + Z)',
				'redo': 'Redo (Ctrl + Y)',
				
				'tabs': {
					'file': 'file',
					'idea': 'thinking',
					'appearence': 'appearance',
					'view': 'view'
				},
				
				'quickvisit': {
					'new': 'New (Ctrl + Alt + N)',
					'save': 'Save (Ctrl + S)',
					'share': 'Share (Ctrl + Alt + S)',
					'feedback': 'Feedback question (F1)',
					'editshare': 'Edit'
				},
				
				'menu': {
					
					'mainmenutext': 'Baidu mind map', // main menu button text
					
					'newtab': 'New',
					'opentab': 'open',
					'savetab': 'Save',
					'sharetab': 'Share',
					'preferencetab': 'Settings',
					'helptab': 'Help',
					'feedbacktab': 'Feedback',
					'recenttab': 'Recently used',
					'netdisktab': 'Baidu cloud storage',
					'localtab': 'local file',
					'drafttab': 'Draft box',
					'downloadtab': 'Export to local',
					'createsharetab': 'current mind map',
					'managesharetab': 'Shared',
					
					'newheader': 'New mind map',
					'openheader': 'open',
					'saveheader': 'Save to',
					'draftheader': 'Draft box',
					'shareheader': 'Share my mind map',
					'downloadheader': 'Export to the specified format',
					'preferenceheader': 'Preferences',
					'helpheader': 'Help',
					'feedbackheader': 'Feedback'
				},
				
				'mydocument': 'My Documents',
				'emptydir': 'The directory is empty! ',
				'pickfile': 'Select file...',
				'acceptfile': 'Supported format: {0}',
				'dropfile': 'or drag the file here',
				'unsupportedfile': 'Unsupported file format',
				'untitleddoc': 'untitled document',
				'overrideconfirm': '{0} already exists, confirm overwrite? ',
				'checklogin': 'Check login status...',
				'loggingin': 'Login...',
				'recent': 'Recently opened',
				'clearrecent': 'clear',
				'clearrecentconfirm': 'Are you clearing the list of recent documents? ',
				'cleardraft': 'Empty',
				'cleardraftconfirm': 'Confirm empty drafts? ',
				
				'none_share': 'Do not share',
				'public_share': 'public sharing',
				'password_share': 'Private sharing',
				'email_share': 'Mail invitation',
				'url_share': 'mind map URL address:',
				'sns_share': 'Social Network Sharing:',
				'sns_share_text': '“{0}” -I use the mind map of Baidu mind map, take a look! (Address 1})',
				'none_share_description': 'Do not share the current mind map',
				'public_share_description': 'Create a share visible to anyone',
				'share_button_text': 'Create',
				'password_share_description': 'Create a share that requires a password to be visible',
				'email_share_description': 'Create a share visible to the specified person, you can also allow them to edit',
				'ondev': 'Please look forward to it! ',
				'create_share_failed': 'Share failed: {0}',
				'remove_share_failed': 'Delete failed: {1}',
				'copy': 'copy',
				'copied': 'has been copied',
				'shared_tip': 'The current mind map is shared by {0}, you can save it to your own network disk or share it again'
				'current_share': 'current mind map',
				'manage_share': 'My share',
				'share_remove_action': 'Do not share the mind map',
				'share_view_action': 'Open shared address',
				'share_edit_action': 'Edit shared file',
				
				'login': 'Login',
				'logout': 'logout',
				'switchuser': 'switch account',
				'userinfo': 'Personal information',
				'gotonetdisk': 'My network disk',
				'requirelogin': 'Please <a class="login-button">login</a> and use ',
				'saveas': 'Save as',
				'filename': 'filename',
				'fileformat': 'Save format',
				'save': 'Save',
				'mkdir': 'New directory',
				'recycle': 'Recycle Bin',
				'newdir': 'unnamed directory',
				
				'bold': 'Bold',
				'italic': 'italic',
				'forecolor': 'font color',
				'fontfamily': 'font',
				'fontsize': 'font size',
				'layoutstyle': 'theme',
				'node': 'node operation',
				'saveto': 'Save as',
				'hand': 'Allow dragging',
				'camera': 'Locate the root node',
				'zoom-in': 'Zoom in (Ctrl+)',
				'zoom-out': 'Zoom out (Ctrl-)',
				'markers': 'tag',
				'resource': 'resource',
				'help': 'Help',
				'preference': 'Preferences',
				'expandnode': 'Expand to leaf',
				'collapsenode': 'receive a level one node',
				'template': 'template',
				'theme': 'skin',
				'clearstyle': 'clear style',
				'copystyle': 'copy style',
				'pastestyle': 'paste style',
				'appendsiblingnode': 'same theme',
				'appendchildnode': 'subordinate theme',
				'arrangeup': 'pre-tune',
				'arrangedown': 'post-tune',
				'editnode': 'Edit',
				'removenode': 'remove',
				'priority': 'Priority',
				'progress': {
					'p1': 'not started',
					'p2': 'Complete 1/8',
					'p3': 'Complete 1/4',
					'p4': 'Complete 3/8',
					'p5': 'Complete half',
					'p6': 'Complete 5/8',
					'p7': 'Complete 3/4',
					'p8': 'Complete 7/8',
					'p9': 'Completed',
					'p0': 'clear progress'
				},
				'link': 'link',
				'image': 'picture',
				'note': 'Remarks',
				'insertlink': 'insert link',
				'insertimage': 'insert image',
				'insertnote': 'insert note',
				'removelink': 'Remove existing links',
				'removeimage': 'Remove existing image',
				'removenote': 'Remove existing notes'
				'resetlayout': 'Organize',
				
				'justnow': 'just',
				'minutesago': '{0} minutes ago',
				'hoursago': '{0} hours ago',
				'yesterday': 'Yesterday',
				'daysago': '{0} days ago',
				'longago': 'A long time ago',
				
				'redirect': 'You are opening the connection {0}, Baidu mind map can not guarantee the security of the connection, do you want to continue? ',
				'navigator': 'navigator',
				
				'unsavedcontent': 'The current file has not been saved to the network drive: \n\n{0}\n\n Although unsaved data is cached in the drafts, clearing the browser cache will cause the drafts to be cleared. ',
				
				'shortcuts': 'shortcuts',
				'contact': 'Contact and feedback',
				'email': 'mail group',
				'qq_group': 'QQ group',
				'github_issue': 'Github',
				'baidu_tieba': '贴吧',
				
				'clipboardunsupported': 'Your browser does not support clipboard, please use shortcut key to copy',
				
				'load_success': '{0} loaded successfully',
				'save_success': '{0} has been saved in {1}',
				'autosave_success': '{0} has been automatically saved in {1}',
				
				'selectall': 'Select all',
				'selectrevert': 'inverse selection',
				'selectsiblings': 'Select brother nodes',
				'selectlevel': 'Select a peer node',
				'selectpath': 'Select path',
				'selecttree': 'Select subtree'
			},
			'popupcolor': {
				'clearColor': 'clear color',
				'standardColor': 'standard color',
				'themeColor': 'Theme color'
			},
			'dialogs': {
				'markers': {
					'static': {
						'lang_input_text': 'Text content:',
						'lang_input_url': 'Link address:',
						'lang_input_title': 'Title:',
						'lang_input_target': 'Whether in new window:'
					},
					'priority': 'Priority',
					'none': 'None',
					'progress': {
						'title': 'progress',
						'notdone': 'unfinished',
						'done1': 'Complete 1/8',
						'done2': 'Complete 1/4',
						'done3': 'Complete 3/8',
						'done4': 'Complete 1/2',
						'done5': 'Complete 5/8',
						'done6': 'Complete 3/4',
						'done7': 'Complete 7/8',
						'done': 'Completed'
					}
				},
				'help': {
					
				},
				'hyperlink': {},
				'image': {},
				'resource': {}
			},
			'hyperlink': {
				'hyperlink': 'link...',
				'unhyperlink': 'Remove link'
			},
			'image': {
				'image': 'image...',
				'removeimage': 'Remove image'
			},
			'marker': {
				'marker': 'progress/priority...'
			},
			'resource': {
				'resource': 'Resources...'
			}
		}
	}
});
* 配置全局用户及邮箱<br/>
  git config --global user.name "Your Name"<br/>
  git config --global user.email "email@example.com"<br/>
配置当前仓库用户及邮箱<br/>
git config user.name "Your Name"<br/>
git config user.email "email@xx.com"<br/>
查看配置文件内容<br/>
git config --list<br/>
初始化版本库<br/>
git init  <br/>
把文件放到 git 仓库<br/>
git add<br/>
把文件提交到 git 仓库<br/>
git commit -m "xxx"<br/>
查看当前仓库状态<br/>
git status<br/>
查看文件修改<br/>
git diff <file><br/>
评论区
git diff    #是工作区(work dict)和暂存区(stage)的比较<br/>
git diff --cached    #是暂存区(stage)和分支(master)的比较<br/>
git diff HEAD  #查看工作区和版本库里面最新版本的区别<br/>
查看提交日志 git log git log --pretty=oneline<br/>
版本回退到上一个版本<br/>
git reset --hard HEAD^<br/>
git reset --hard 3628164<br/>
查看命令日志<br/>
git reflog<br/>
丢弃工作区修改<br/>
git checkout -- file<br/>
撤销暂存区修改<br/>
git reset HEAD file<br/>
删除暂存区文件<br/>
git rm <file><br/>
git commit -m "xxxx"<br/>
从暂存区恢复删除文件<br/>
git checkout --<file><br/>
关联远程仓库<br/>
git remote add origin git@server-name:path/repo-name.git<br/>
首次 push 到远程仓库<br/>
 git push -u origin master <br/>
非首次推送到远程仓库<br/>
git push origin master <br/>
从远程仓库克隆<br/>
git clone git@server-name:path/repo-name.git<br/>
分支管理<br/>
查看分支：git branch<br/>
创建分支：git branch <name><br/>
切换分支：git checkout <name><br/>
创建+切换分支：git checkout -b <name><br/>
合并某分支到当前分支：git merge <name><br/>
删除分支：git branch -d <name><br/>
禁止使用 fast forward merge 方式<br/>
git merge --no-ff -m "xxx"  <branch name><br/>
隐藏现场及回复现场<br/>
git stash #保存现场<br/>
git stash pop #恢复现场<br/>
强制删除未合并分支<br/>
git branch -D <branch name><br/>
多人协作<br/>
git remote #查看远程库信息<br/>
git remote -v #查看远程库信息详细<br/>
git push origin master #推送本地 master 分支<br/>
git checkout -b dev origin/dev #创建本地 dev 并关联远程 dev 分支<br/>
git branch --set-upstream branch-name origin/branch-name #建立本地分支与远程分支得关联<br/>
git pull #抓取远程分支<br/>
创建标签<br/>
git tag <name>  #创建标签<br/>
git tag #查看所有标签<br/>
git tag v0.9 6224937 #对某一次 commit 打标签<br/>
git show <tagname> #查看标签信息<br/>
git tag -a v0.1 -m "version 0.1 released" 3628164 #创建有说明的标签<br/>
操作标签<br/>
git tag -d v0.1 #删除标签<br/>
git push origin <tagname> #推送标签到远程<br/>
git push origin --tags #推送本地所有未推送到远程的标签<br/>
git push origin :refs/tags/<tagname> #删除远程标签<br/>
自定义git<br/>
git config --global color.ui true #配置颜色开启<br/>
git config --global alias.st status<br/>
git config --global alias.co checkout<br/>
git config --global alias.ci commit<br/>
git config --global alias.br branch<br/>
git config --global alias.unstage 'reset HEAD'<br/>
git config --global alias.last 'log -1'<br/>
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"<br/>
git config --global core.quotepath false # 设置显示中文文件名<br/>

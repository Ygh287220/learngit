* 配置全局用户及邮箱<br/>
<pre><code>git config --global user.name "Your Name"<br/></pre></code>
<pre><code>git config --global user.email "email@example.com"<br/></pre></code>
* 配置当前仓库用户及邮箱<br/>
<pre><code>git config user.name "Your Name"<br/></pre></code>
<pre><code>git config user.email "email@xx.com"<br/></pre></code>
* 查看配置文件内容<br/>
<pre><code>git config --list<br/></pre></code>
* 初始化版本库<br/>
<pre><code>git init</pre></code>
* 把文件放到 git 仓库<br/>
<pre><code>git add<br/></pre></code>
* 把文件提交到 git 仓库<br/>
<pre><code>git commit -m "xxx"<br/></pre></code>
* 查看当前仓库状态<br/>
<pre><code>git status<br/></pre></code>
* 查看文件修改<br/>
<pre><code>git diff <file><br/></pre></code>
* 评论区
<pre><code>git diff    #是工作区(work dict)和暂存区(stage)的比较<br/></pre></code>
<pre><code>git diff --cached    #是暂存区(stage)和分支(master)的比较<br/></pre></code>
<pre><code>git diff HEAD  #查看工作区和版本库里面最新版本的区别<br/></pre></code>
* 查看提交日志 git log git log --pretty=oneline<br/>
* 版本回退到上一个版本<br/>
<pre><code>git reset --hard HEAD^<br/></pre></code>
<pre><code>git reset --hard 3628164<br/></pre></code>
* 查看命令日志<br/>
<pre><code>git reflog<br/></pre></code>
* 丢弃工作区修改<br/>
<pre><code>git checkout -- file<br/></pre></code>
* 撤销暂存区修改<br/>
<pre><code>git reset HEAD file<br/></pre></code>
* 删除暂存区文件<br/>
<pre><code>git rm <file><br/></pre></code>
<pre><code>git commit -m "xxxx"<br/></pre></code>
* 从暂存区恢复删除文件<br/>
<pre><code>git checkout --<file><br/></pre></code>
* 关联远程仓库<br/>
<pre><code>git remote add origin git@server-name:path/repo-name.git<br/></pre></code>
* 首次 push 到远程仓库<br/>
<pre><code> git push -u origin master <br/></pre></code>
* 非首次推送到远程仓库<br/>
<pre><code>git push origin master <br/></pre></code>
* 从远程仓库克隆<br/>
<pre><code>git clone git@server-name:path/repo-name.git<br/></pre></code>
* 分支管理<br/>
<pre><code>查看分支：git branch<br/></pre></code>
<pre><code>创建分支：git branch <name><br/></pre></code>
<pre><code>切换分支：git checkout <name><br/></pre></code>
<pre><code>创建+切换分支：git checkout -b <name><br/></pre></code>
<pre><code>合并某分支到当前分支：git merge <name><br/></pre></code>
<pre><code>删除分支：git branch -d <name><br/></pre></code>
<pre><code>禁止使用 fast forward merge 方式<br/></pre></code>
<pre><code>git merge --no-ff -m "xxx"  <branch name><br/></pre></code>
* 隐藏现场及回复现场<br/>
<pre><code>git stash #保存现场<br/></pre></code>
<pre><code>git stash pop #恢复现场<br/></pre></code>
* 强制删除未合并分支<br/>
<pre><code>git branch -D <branch name><br/></pre></code>
* 多人协作<br/>
<pre><code>git remote #查看远程库信息<br/></pre></code>
<pre><code>git remote -v #查看远程库信息详细<br/></pre></code>
<pre><code>git push origin master #推送本地 master 分支<br/></pre></code>
<pre><code>git checkout -b dev origin/dev #创建本地 dev 并关联远程 dev 分支<br/></pre></code>
<pre><code>git branch --set-upstream branch-name origin/branch-name #建立本地分支与远程分支得关联<br/></pre></code>
<pre><code>git pull #抓取远程分支<br/></pre></code>
* 创建标签<br/>
<pre><code>git tag <name>  #创建标签<br/></pre></code>
<pre><code>git tag #查看所有标签<br/></pre></code>
<pre><code>git tag v0.9 6224937 #对某一次 commit 打标签<br/></pre></code>
<pre><code>git show <tagname> #查看标签信息<br/></pre></code>
<pre><code>git tag -a v0.1 -m "version 0.1 released" 3628164 #创建有说明的标签<br/></pre></code>
* 操作标签<br/>
<pre><code>git tag -d v0.1 #删除标签<br/></pre></code>
<pre><code>git push origin <tagname> #推送标签到远程<br/></pre></code>
<pre><code>git push origin --tags #推送本地所有未推送到远程的标签<br/></pre></code>
<pre><code>git push origin :refs/tags/<tagname> #删除远程标签<br/></pre></code>
* 自定义git<br/>
<pre><code> config --global color.ui true #配置颜色开启<br/></pre></code>
<pre><code> config --global alias.st status<br/></pre></code>
<pre><code> config --global alias.co checkout<br/></pre></code>
<pre><code> config --global alias.ci commit<br/></pre></code>
<pre><code> config --global alias.br branch<br/></pre></code>
<pre><code> config --global alias.unstage 'reset HEAD'<br/></pre></code>
<pre><code> config --global alias.last 'log -1'<br/></pre></code>
<pre><code> config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"<br/></pre></code>
<pre><code> config --global core.quotepath false # 设置显示中文文件名<br/></pre></code>
